import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Solicitud from '@/components/Solicitud'
import Login from '@/components/Login'
import Publicacion from '@/components/Publicacion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Solicitud',
      name: 'Solicitud',
      component: Solicitud
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Publicacion',
      name: 'Publicacion',
      component: Publicacion
    }
  ]
})
