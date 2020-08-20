import Router from './router/index.routes';

const App = document.getElementById('root');
Router(App, '#/');

window.addEventListener('hashchange', () => {
    Router(App, window.location.hash);
})