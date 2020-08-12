import Home from "../pages/Home";

let App = document.getElementById('root');

function Router(router) {
    App.innerHTML = '';
    switch (router) {
        case '#/': {
            return App.appendChild(Home());
        }
        default:
            return '';
    }
}

export default Router;