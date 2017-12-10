import Vue from 'vue'
import App from './App.vue'
import Home from './home.vue'
import RestauranteTop from './RestauranteTop.vue'
import RestauranteList from './RestauranteList.vue'
import Contacto from './Contacto.vue'

import VerRestaurante from './VerRestaurante.vue'
import NuevoRestaurante from './NuevoRestaurante.vue'
import EditarRestaurante from './EditarRestaurante.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes =[
  {path: '/',component: Home},
  {path: '/home', component: Home},
  {path: '/restaurante', component: RestauranteList},
  {path: '/restauranteTop/:id', name: 'restauranteTop',component: RestauranteTop},
  {path: '/contacto', component: Contacto},

  {path: '/verRestaurante/:id', name: 'verRestaurante',component: VerRestaurante},
  {path: '/editarRestaurante/:id', name: 'editarRestaurante',component: EditarRestaurante},
  {path: '/nuevoRestaurante', name: 'nuevoRestaurante',component: NuevoRestaurante},
]

const router =new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home',Home);
// Vue.component('restauranteTop',RestauranteTop);
// Vue.component('restauranteList',RestauranteList);
Vue.component('contacto',Contacto);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
