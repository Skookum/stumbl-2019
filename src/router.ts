import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/home/home.vue';
const About = () => import('./views/about/about.vue');
const Rewards = () => import('./views/rewards/rewards.vue');
const VenueDetails = () => import('./views/venue-details/venue-details.vue');
const Intro = () => import('./views/intro/intro.vue');

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/rewards',
      name: 'rewards',
      component: Rewards,
    },
    {
      path: '/venue/:venueId',
      name: 'venue',
      component: VenueDetails,
    },
    {
      path: '*',
      name: 'other',
      redirect: '/',
    },
  ],
});
