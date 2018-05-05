import "./stylesheets/main.css"

// Small helpers you might want to keep
import "./helpers/context_menu.js"
import "./helpers/external_links.js"

import { remote } from "electron"
import jetpack from "fs-jetpack"
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router.js'
import App from './App.vue';

const app = remote.app
const appDir = jetpack.cwd(app.getAppPath())

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json")

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

Vue.use(VueRouter)

const router = new VueRouter({
  routes // short for `routes: routes`
})

const appInstance = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
