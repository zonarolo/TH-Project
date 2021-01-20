import HelloWorldPage from './pages/HelloWorldPage';
import UserProfile from './pages/UserProfile';

const pageRoutes = [
  {
    path: '/userprofile',
    name: 'User Profile',
    component: UserProfile,
  },
  {
    path: '/helloworldpage',
    name: 'Hello World!',
    component: HelloWorldPage,
  },
];

export default pageRoutes;
