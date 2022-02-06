import * as Vue from "vue";
import App from './App.vue';

document.addEventListener('DOMContentLoaded', () => {
    const appRoots = document.querySelectorAll('.js-vue');

    for (const root of appRoots) {
        const app = Vue.createApp({
            components: {
                'my-vue-app': App,
            },
        });
        app.mount(root);
    }
})

