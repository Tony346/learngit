import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index';
import Home from '@/views/Home.vue';
import  Detail from'@/views/Detail.vue'
import Login from '@/views/Login.vue'
import Person from '@/views/Person.vue'
import Store from '@/views/Person.vue'
import UpdatePerson from '@/views/UpdatePerson.vue'
import Test from '@/views/Test.vue'
import {checkIsLogin} from '@/api/index'

const routes = [
 {
  path: '/',
  component: Home
 },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'/store',
      component:Store,
    },
    {
      path:'/UpdatePerson',
      component:UpdatePerson,
    },
    {
      path:'/test',
      component:Test,
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to,from,next)=>{
       const arr=['/person','UpdatePerson','/store']
       if(localStorage.getItem('token')===null&&arr.includes(to.path)){        
        next('/login')
        return
       }else{
        next()
        return
       }
})
export default router
