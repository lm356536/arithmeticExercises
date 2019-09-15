import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '*',
  redirect: '/math'
},
{
  path: '/math',
  name: 'math',
  component: () =>
            import('../view/math/'),
  meta: {
    title: '小学口算题'
  }
}
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export {
  router
}
