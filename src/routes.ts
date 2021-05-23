import Dashboard from './componetns/Dashboard/Dashboard';
import Home from './componetns/Home';

export const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    component: Home,
    authenticatedRoute: true,
  },
];
