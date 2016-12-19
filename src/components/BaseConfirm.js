import BaseModal from '@lassehaslev/vue-modal';
export default {
    mixins: [ BaseModal ],
    props: {
        message: {
            type: String,
            default: 'Are you sure?',
        },
    },

    data() {
        return {
            isConfirmLoading: false,
        }
    },

    methods: {

        onModalOpen() {
            this.isConfirmLoading = false;
        },

        confirm() {
            this.isConfirmLoading = true;
            this.$emit( 'confirm' )
            // this.close();
        },
        cancel() {
            this.$emit( 'cancel' )
            this.close();
        },
    }
}
