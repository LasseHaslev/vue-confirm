import { Confirm } from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">Simple cover confirm</h1>
        <p>This is uses a slot and covers, it automaticly detects the click of all elements within the component..</p>
                    <pre>
    &#60;confirm @confirm="onConfirm" @cancel="onCancel" ref="confirm">&#60;/confirm>
        </pre>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="has-text-centered">
                        <confirm @confirm="onConfirm" @cancel="onCancel" ref="confirm">
                            <button class="button is-primary is-large">Show confirm</button>
                        </confirm>
                    </div>
                </div>
            </section>
            
        </div>
    `,

    methods: {
        open() {
            this.$refs.confirm.open();
        },

        onConfirm() {
            var self = this;
            window.setTimeout( function() {
                self.$refs.confirm.close();
            }, 1000 );
            console.log( 'onConfirm' );
        },
        onCancel() {
            console.log( 'onCancel' );
        },
    },

    components: {
        Confirm,
    }
}
