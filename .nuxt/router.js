import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _112402a5 = () => interopDefault(import('..\\pages\\coinCap.vue' /* webpackChunkName: "pages_coinCap" */))
const _2b399d7e = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _3c8ebbe6 = () => interopDefault(import('..\\pages\\kmd.vue' /* webpackChunkName: "pages_kmd" */))
const _0ecba088 = () => interopDefault(import('..\\pages\\coins\\_coinInfo.vue' /* webpackChunkName: "pages_coins__coinInfo" */))
const _1e032b14 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/coinCap",
      component: _112402a5,
      name: "coinCap"
    }, {
      path: "/inspire",
      component: _2b399d7e,
      name: "inspire"
    }, {
      path: "/kmd",
      component: _3c8ebbe6,
      name: "kmd"
    }, {
      path: "/coins/:coinInfo?",
      component: _0ecba088,
      name: "coins-coinInfo"
    }, {
      path: "/",
      component: _1e032b14,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
