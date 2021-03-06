import VueGtag from 'vue-gtag';
import Cookies from 'js-cookie';

export default ({
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router, // the router instance for the app
                    siteData, // site metadata
                    isServer // is this enhancement applied in server-rendering or client
                }) => {
    Vue.use(VueGtag, {
        config: {id: 'UA-89489770-2'},
        enabled: Cookies.get('opt_in') === '1'
    }, router);
}
