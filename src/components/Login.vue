<template>
  <div class="container">
      <div class="wrap">
        <div class="logo">
            <img src="../assets/logo.png">
        </div>
        
        <form class="form">
            <div class="input">
                <input 
                    type="text" 
                    placeholder="请输入账户"
                    v-model="userInfo.username"
                    />
            </div>
            <div class="input">
                <input 
                    type="password"
                    placeholder="请输入密码"
                    v-model="userInfo.pwd"/>

            </div>
            <div class="a">
                <a href="">忘记密码?</a>
            </div>
            <div class="btn">
                <input type='button' value='登录' @click.stop="login" />
            </div>
            <div v-bind:class="{msg:errInfo.hasError}">{{errInfo.msg}}</div>
        </form>
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
        
      //使用代理机制，发送HTTP请求
      this.$http({
          url: '/dxss/login/authenticate',
          method:'post',
          headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          data: qs.stringify({
            username: this.userInfo.username,
            password: MD5(
              this.userInfo.username + this.userInfo.pwd + "adtime.com"
            ) })
      })
        .then(function(res) {
          console.log(res);
          this.errInfo.msg = "";
          this.errInfo.hasError = false;
          //设置Cookie
          this.setCookie("username", "youlan", 1);
          this.$router.push("/user-info");
        })
        .catch(function(error) {
          this.errInfo.msg = "登录出错，请联系管理员！";
          this.errInfo.hasError = true;
        })
      
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
* {
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
  /* width: 200px; */
  /* height: 300px; */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  background: url("../assets/login-background.jpg") repeat-y;
  position: absolute;
  z-index: 1;
}
/* .container::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  opacity: 0.6;
} */
.wrap {
  height: 100%;
  width: 390px;
  margin: 0 auto;
  padding: 190px 0 30px 0;
}

.container .wrap .logo img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: white;
  margin-bottom: 80px;
}

.container .wrap .form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

.container .wrap .form .input {
  width: 100%;
  margin-bottom: 10px;
}
.form .input input {
  font-family: Montserrat-Bold;
  columns: #333333;
  font-size: 15px;
  line-height: 1.2;
  height: 50px;
  width: 100%;
  border-radius: 25px;
  padding: 0 30px 0 53px;
  border: none;
  outline: none;
}
.container .wrap .form .btn > input {
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #e0e0e0;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: blue;
  transition: all 0.4s;
  border: none;
  font-weight: bold;
  outline:none;
}

.a {
  width: 100%;
  text-align: right;
  padding-right: 35px;
  font-size: 15px;
  margin-bottom: 10px;
  display: block;
}
.a > a {
  text-decoration: none;
  color: white;
}
.msg {
  color: red;
  font-size: 15px;
}
</style>

