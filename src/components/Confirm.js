import BaseConfirm from './BaseConfirm';
export default {
    template: `
    <span>
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
        <span @click="open">
            <slot></slot>
        </span>
    </span>
    `,

    mixins: [ BaseConfirm ],
}
