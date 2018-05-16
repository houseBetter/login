<template>
  <div>
      <h1>Welcome,<span class="span">{{userInfo.username}}</span></h1>
      <a href="javascipt:void(0);" v-on:click="logout">退出</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        username: "youlan"
      }
    };
  },
  beforeMount(){
      console.log(this.$el)

  },
  mounted(){
      console.log(this.$el)
  },
  methods: {
      //退出
    logout: function() {
      //删除Cookie
      this.delCookie("username");
      this.$router.push('/login2')

    },
    //删除Cookie
    delCookie(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = this.getCookie(name);
      if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    //获取Cookie
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
.span {
  color: red;
}
</style>


