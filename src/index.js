import Router from './router/index.routes';

Router('#/');

window.addEventListener('hashchange', () => {
    Router(window.location.hash);
})