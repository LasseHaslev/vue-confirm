import Confirm from '../components/Confirm';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">Simple confirm with message</h1>
                    <p>This is a simple vue modal where you can listen to events if it is confirmed or canceled</p>
                    <pre>
    &#60;confirm message="Are you sure you want to do this?" @confirm="onConfirm" @cancel="onCancel" ref="confirm">&#60;/confirm>
        </pre>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="has-text-centered">
                        <button @click="open" class="button is-primary is-large">Show confirm</button>
                    </div>
                </div>
                <confirm message="Are you sure you want to do this?" @confirm="onConfirm" @cancel="onCancel" ref="confirm"></confirm>
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
