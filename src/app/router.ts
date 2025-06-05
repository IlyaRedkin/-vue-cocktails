import { createRouter, createWebHistory } from 'vue-router'
import { cocktails } from '../shared/config/cocktails'

const routes = [
  {
    path: '/',
    redirect: `/${cocktails[0].code}`,
  },
  ...cocktails.map(({ code }) => ({
    path: `/${code}`,
    name: code,
    component: () => import('../pages/CocktailPage.vue'),
    props: { code },
  })),
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFoundPage.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
