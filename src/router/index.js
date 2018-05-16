import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserInfo from '@/components/UserInfo'

import Login2 from '@/components/Login2'
import UserInfo2 from '@/components/UserInfo2'

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
},{
  path:"/login2",
  name:'login2',
  component:Login2
},
{
  path:"/user-info2",
  name:'user-info2',
  component:UserInfo2
}
]
export default new Router({
  routes
})
