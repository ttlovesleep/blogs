/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\myWork\\学习文件\\myblog\\blogs\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-4d5dd166",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4d5dd166").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-34041230",
    path: "/blogs/2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-34041230").then(next)
    },
  },
  {
    name: "v-d8c17f70",
    path: "/blogs/1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d8c17f70").then(next)
    },
  },
  {
    name: "v-385cad88",
    path: "/blogs/3.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-385cad88").then(next)
    },
  },
  {
    name: "v-77f7c170",
    path: "/blogs/4.study.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-77f7c170").then(next)
    },
  },
  {
    name: "v-781279fc",
    path: "/blogs/5.leetcode.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-781279fc").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-142138a4",
    path: "/tag/mood/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-142138a4").then(next)
    },
    meta: {"pid":"tags","id":"mood"}
  },
  {
    path: "/tag/mood/index.html",
    redirect: "/tag/mood/"
  },
  {
    name: "v-9c80e83c",
    path: "/tag/工作问题总结/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-9c80e83c").then(next)
    },
    meta: {"pid":"tags","id":"工作问题总结"}
  },
  {
    path: "/tag/工作问题总结/index.html",
    redirect: "/tag/工作问题总结/"
  },
  {
    name: "v-3ae5b494",
    path: "/tag/markdown/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-3ae5b494").then(next)
    },
    meta: {"pid":"tags","id":"markdown"}
  },
  {
    path: "/tag/markdown/index.html",
    redirect: "/tag/markdown/"
  },
  {
    name: "v-e8d86dc8",
    path: "/tag/js/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-e8d86dc8").then(next)
    },
    meta: {"pid":"tags","id":"js"}
  },
  {
    path: "/tag/js/index.html",
    redirect: "/tag/js/"
  },
  {
    name: "v-89abd2d6",
    path: "/tag/算法/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-89abd2d6").then(next)
    },
    meta: {"pid":"tags","id":"算法"}
  },
  {
    path: "/tag/算法/index.html",
    redirect: "/tag/算法/"
  },
  {
    name: "v-2bf76980",
    path: "/categories/随笔/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-2bf76980").then(next)
    },
    meta: {"pid":"categories","id":"随笔"}
  },
  {
    path: "/categories/随笔/index.html",
    redirect: "/categories/随笔/"
  },
  {
    name: "v-14bbbf36",
    path: "/categories/前端/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-14bbbf36").then(next)
    },
    meta: {"pid":"categories","id":"前端"}
  },
  {
    path: "/categories/前端/index.html",
    redirect: "/categories/前端/"
  },
  {
    name: "v-39ba7548",
    path: "/categories/LeetCode/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-39ba7548").then(next)
    },
    meta: {"pid":"categories","id":"LeetCode"}
  },
  {
    path: "/categories/LeetCode/index.html",
    redirect: "/categories/LeetCode/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]