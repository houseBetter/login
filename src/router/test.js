import HelloWorld from '@/components/HelloWorld'
import MyHelloWorld from '@/components/MyHelloWorld'
import Test from '@/components/test'
export const testJson = [
    {
      path: '/kk',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
            path: 'youlan',
            name: 'MyHelloWorld',
            component: Test
          }
      ]
    }
  ]
  export const testJson1 = [
    {
      path: '/zhoujiaohua',
      name: 'MyHelloWorld',
      component: MyHelloWorld
    }
  ]