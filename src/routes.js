import MarketInsight from './views/MarketInsight.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import PreviewComponent from './views/PreviewComponent.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: MarketInsight, meta: { title: 'Home' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/prev', component: PreviewComponent },
  { path: '/:path(.*)', component: NotFound },
]
