import MarketInsight from './views/MarketInsight.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: MarketInsight, meta: { title: 'Home' } },
  { path: '/:path(.*)', component: NotFound },
]
