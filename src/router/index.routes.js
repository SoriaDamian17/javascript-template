import UseRender from "../hook/useRender";
import { pages } from '../pages';

function Router(App, router) {
    App.innerHTML = '';
    switch (router) {
        case '#/': {
            return App.appendChild(
                UseRender(pages.Home())
            );
        }
        default:
            return App.appendChild(
                UseRender(pages.NotFound())
            );
    }
}

export default Router;