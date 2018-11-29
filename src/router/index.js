import Vue from 'vue'
import Router from 'vue-router'

const todo = r => require.ensure([], () => r(require('../pages/todo/todo')), 'todo')
const HelloWorld = r => require.ensure([], () => r(require('../components/Helloworld')), 'Helloworld')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    },
    {
      path: '/',
      redirect: 'todo'
    }
  ]
})
