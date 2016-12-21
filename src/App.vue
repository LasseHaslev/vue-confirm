<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-confirm">
                        @lassehaslev/vue-confirm
                    </a>
                </h3>
            </div>
        </section>

        <simple-confirm></simple-confirm>
        <confirm-message></confirm-message>
        <simple-cover-confirm></simple-cover-confirm>

        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container is-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleConfirm from './tutorials/SimpleConfirm';
import SimpleCoverConfirm from './tutorials/SimpleCoverConfirm';
import ConfirmMessage from './tutorials/ConfirmMessage';
export default {
    name: 'app',
    data () {
        return {
        }
    },

    components: {
        SimpleConfirm,
        SimpleCoverConfirm,
        ConfirmMessage,
    }
}
</script>
