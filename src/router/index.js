import Vue from 'vue'
import Router from 'vue-router'
//import Login from '@/components/Login'
//import UserInfo from '@/components/UserInfo'

import Login from '@/components/Login2'
import UserInfo from '@/components/UserInfo2'

Vue.use(Router)


const routes = [{
  path:"/login",
  name:'login',
  component:Login
},
{
  path:"/user-info",
  name:'user-info',
  component:UserInfo
}
]
export default new Router({
  routes
})
