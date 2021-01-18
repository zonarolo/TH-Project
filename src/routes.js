import Home from './pages/Home';
import HelloWorldPage from './pages/HelloWorldPage';
import UserProfile from './pages/UserProfile';

const pageRoutes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile,
  },
  {
    path: '/helloworldpage',
    name: 'helloworld',
    component: HelloWorldPage,
  },
];

export default pageRoutes;
