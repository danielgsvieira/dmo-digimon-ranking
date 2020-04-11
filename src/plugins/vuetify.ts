import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import pt from 'vuetify/src/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#607d8b',
        accent: '#2196f3',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#00bcd4',
        success: '#4caf50',
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
});
