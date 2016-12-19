# @lassehaslev/vue-confirm

> Simple confirm dialog using vue

## Installation
Run ```npm install @lassehaslev/vue-confirm --save``` in your project folder

## Usage
Use this simple confirm with [Bulma](https://trello.com/b/BDC3zQvN).
This package is based on [@lassehaslev/vue-modal](https://github.com/LasseHaslev/vue-modal)
``` js
import { Confirm } from '@lassehaslev/vue-confirm';
export default {
    template: `
        <a @click="open" class="button is-primary is-large" href="#">Open a simple confirm</a>
        <confirm ref="confirm" message="You sure you want to do this?"></confirm>
    `,
    methods: {
        open() {
            this.$refs.confirm.open();
        }
    },
    components: {
        Confirm,
    }
}
```

## Extend / Build your own!
Just include the BaseConfirm class as a mixin, and you are good to call ```confirm``` and ```cancel``` and checking ```isShowingModal``` boolean.
```js
import BaseConfirm from '@lassehaslev/vue-confirm';

export default {
    template: `
        <div class="modal"
             :class="{ 'is-active': isShowingModal }">
            <div class="modal-background" @click="cancel"></div>
            <div class="modal-content">
            <div class="box">
                    <div class="content has-text-centered">
                        <h1 class="title">{{ message }}</h1>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <button class="button is-large is-primary is-fullwidth"
                                    :class="{ 'is-loading': isConfirmLoading }"
                                    @click="confirm"
                                >Confirm</button>
                        </div>
                        <div class="column">
                            <button @click="cancel" class="button is-large is-is-default is-fullwidth">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="modal-close" @click="cancel"></button>
        </div>
    `,

    mixins: [ BaseConfirm ],
}
```


## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
