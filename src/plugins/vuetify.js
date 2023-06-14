import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        light: true,
        themes: {
            light: {
                primary: '#734B96',
                secondary: '#1C1D1F',
                background: '#FFFFFF',
                errors: '#f44336',
                info: '#1E88E5',
                success: '#64DD17'
            }
        }
    }
});
