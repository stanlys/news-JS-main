import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'a315b90538524267bc2db550201e5bce', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
