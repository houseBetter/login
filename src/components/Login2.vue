<template>
  <div class="container">
    <div class="container-left"></div>
    <div class="login">
      <form class="login-form">
        <h1 class="h">登录</h1>
        <div class="div-username">
          <label>用户名</label>
          <input type="text" placeholder="请输入用户名" v-model="userInfo.username"/>
        </div>
        <div class="div-pwd">
          <label>密码</label>
          <input type="password" placeholder="请输入密码" v-model="userInfo.pwd"/>
        </div>
        <div class="div-vercode">
          <label>验证码</label>
          <input type="text" class="vercode" placeholder="请输入验证码"/>
          <!-- <img src=""/> -->
        </div>
        <div class="div-radio">
          <input type="radio" class="radio"/><span>记住我</span>
        </div>
        <input type="button" value="登录" class="login-btn" @click.stop="login">
        <div class="div-forget">
          <a href="">忘记用户名或密码</a>
        </div>
      </form>
      <div v-bind:class="{msg:errInfo.hasError}">{{errInfo.msg}}</div>
    </div>
  </div>
</template>
<script>
import {MD5} from '../utils/md5';
import qs from 'qs'
export default {
  data() {
    return {
      userInfo: {
        username: "",
        pwd: ""
      },
      errInfo: {
        hasError: false,
        msg: ""
      }
    };
  },
  created() {
    //Cookie是否过期，有效访问登录页面，跳转到用户信息页面，否则进入登录页面；
    this.checkLogin();
  },
  methods: {
    //检查Cookie是否过期
    checkLogin() {
      if (this.getCookie("username")) {
        this.$router.push("/user-info");
      }
    },
    //登录
    login: function() {

      this.errInfo.msg = "";
          this.errInfo.hasError = false;
          //设置Cookie
          this.setCookie("username", "handsome", 1);
          this.$router.push("/user-info");

      //---------------------------//

      //使用代理机制，发送HTTP请求
      // this.$http({
      //     url: '',
      //     method:'post',
      //     headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      //     data: qs.stringify({
      //       username: this.userInfo.username,
      //       password: MD5(
      //         this.userInfo.pwd
      //       ) })
      // })
      //   .then(function(res) {
      //     console.log(res);
      //     this.errInfo.msg = "";
      //     this.errInfo.hasError = false;
      //     //设置Cookie
      //     this.setCookie("username", "youlan", 1);
      //     this.$router.push("/user-info");
      //   })
      //   .catch(function(error) {
      //     this.errInfo.msg = "登录出错，请联系管理员！";
      //     this.errInfo.hasError = true;
      //   })
      
    },
    //检验输入信息格式
    validate: function() {
      //输入信息检验
    },
    //设置Cookie
    setCookie: function(key, value, expireDays) {
      let expireDate = new Date();
      expireDate.setDate(expireDate.getDate + expireDays);
      document.cookie =
        key +
        "=" +
        escape(value) +
        (expireDays == null ? "" : ";expires=" + expireDate.toGMTString());
    },
    //获取Cookie
    getCookie(key) {
      let arr,
        reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return arr[2];
      } else {
        return null;
      }
    }
  }
};
</script>
<style scoped>
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
/* 设置最外层容器的背景图、宽度和高度 */
.container{
  /* background:url('../assets/login_bg.jpg') no-repeat;
  background-size:cover; */
  width:100%;
  height:100%;
  min-width: 1200px;
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
}
.container-left{
  width:70%;
  height:100%;
  background:url('../assets/login_bg.jpg') no-repeat;
  background-size:cover;
  float:left;
}

/* 设置右边登录区域的比例、显示位置、背景颜色 */
.container .login{
  width:30%;
  height:100%;
  /* margin-right:0px; */ /* 失效？*/
  margin-left:70%;
  min-width: 410px;
  background-color: white;
  
}
/* 设置表单的布局*/
.container .login .login-form{

  display:flex;
  flex-direction: column; /*纵轴为主轴*/
  flex-wrap: wrap;
  justify-content:center; /* flex items居中排列*/
  margin-left:65px;
  margin-right:65px;
  text-align:left;/* 调整表单元素，居左对齐*/
  font-family: Montserrat-Bold;
  font-size:12px;
}
/* 设置表单元素除单选框外，输入框和相应label，为块级元素 */
.login-form label,
.login-form input:not([type='radio'])
{
  display: block;
}
/* 设置验证码输入框，为行内元素*/
/* .login-form img, */
.login-form input[class='vercode']{
  display:inline;
}
/* 设置除按钮外表单所有元素的下外边距*/
.login-form > *:not([class='login-btn']){
  margin-bottom: 28px;
}
/* 按钮下外边距*/
.login-form .login-btn{
  margin-bottom: 20px;
}
/* 设置标题的外底边距*/
.login-form > .h{
  color:#36484f;
  margin-bottom:80px;
  margin-top:60px;
  font-size:42px;

}
/* 设置输入框样式，圆角、宽度、高度、边框等*/
.login-form .div-username input,
.login-form .div-pwd input,
.login-form .div-vercode input,
.login-form .login-btn{
  box-sizing: border-box;
  /* padding:15px; */
  width:320px;
  border-radius:22px;
  background-color:#eff0f4;
  outline:none;
  border:none;
  height:42px;
  line-height: 42px;
  padding:0px;
}

/*用户名、密码、验证码输入框默认文字左外边距调整 */
.login-form .div-username input,
.login-form .div-pwd input,
.login-form .div-vercode input{
  padding-left:22px;
  font-size:14px;
  color:#4f5362;
}

/* 用户名、密码、验证码label位置调整*/
.login-form .div-username label,
.login-form .div-pwd label,
.login-form .div-vercode label{
  padding-left:22px;
  padding-bottom:5px;
  color:#a8acb9;
  font-size:12px;

}
/* 单选框字体样式调整*/
.login-form .div-radio span{
  color:#4f5362;
  font-size:14px;
  padding-left:12px;
}
/* 登录按钮背景颜色、字体颜色调整*/
.login-form .login-btn {
  background-color: green;
  color:white;
  font-size:14px;
  font-weight:bold;
}

/* 修改密码的链接居中*/
.login-form .div-forget{
  text-align: center; 
}
/* 修改密码的链接字体颜色为灰色*/
.login-form .div-forget a{

  font-size:12px;
  color:#a8acb9;
}

</style>
