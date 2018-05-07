import Index from './pages/Index.vue'
import Settings from './pages/Settings.vue'
import Reports from './pages/Reports.vue'

module.exports = {
  routes: [
    { path: '/', component: Index },
    { path: '/settings', component: Settings },
    { path: '/reports', component: Reports },
    { path : '*', redirect : '/' }
  ]
};