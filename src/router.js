import Baz from './pages/Baz.vue'
import Foo from './pages/Foo.vue'
import Bar from './pages/Bar.vue'

module.exports = {
  routes: [
    { path: '/', component: Baz },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path : '*', redirect : '/' }
  ]
};