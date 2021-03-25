// first inport the page component you want to link to a route
import Login from '../pages/Login';
import Settings from '../pages/Settings';
import Drink from '../pages/Drink';

const routes = [
    {
        path: '/',
        name: 'Home Page',
        component: Login,
        exact: true

    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        exact: true
    },
    {
        path: '/drink',
        name: 'Drink',
        component: Drink,
        exact: true
    }
]
export default routes;