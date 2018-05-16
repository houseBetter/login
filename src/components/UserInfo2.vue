<template>
  <div class="container">
    <!-- 头部区 -->
    <div class="header">
      <!------- 在边 ------>
      <div class="header-left">
        <span>不得了平台</span>
      </div>
      <!------- 右边 ------>
      <div class="header-right">
        <a href="">主页</a> 
        <span>|</span> 
        <span>Welcome,handsome</span>
      </div>
    </div>
   <!-- 内容区 -->
    <div class="content">
      <!------- 导航区 -------->
      <div class="nav">
        <span>个人中心</span>
        <ol>
          <li>账号安全</li>
        </ol>
      </div>
      <!------- 个人中心区 -------->
      <div class="personal-center">
        <span class="span-txt">账户信息</span>
        <span class="dashed"></span>
        <div class="user-info">
          <div class="user-portrait">
            <img src="../assets/portrait.png" />
            <span>个人头像</span>
          </div>
          <div class="user-detail">
            <ol>
              <li>
                <label>用户名:</label>
                <span>{{userInfo.username}}</span>
              </li>
              <li>
                <label>公司团队:</label>
                <span>{{userInfo.companyTeam}}</span>
              </li>
              <li>
                <label>注册时间:</label>
                <span>{{userInfo.regDate}}</span>
              </li>
              <li>
                <label>邮箱:</label>
                <span>{{userInfo.email}}</span>
              </li>
              <li>
                <label>手机:</label>
                <span>{{userInfo.phone}}</span>
              </li>
              <li>
                <label>密码:</label>
                <span>
                  <a href="">修改密码</a>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        username: "handsome",
        companyTeam: "产品部门",
        regDate: "2018年5月",
        email: "abc@163.com",
        phone: "1391111111"
      }
    };
  },
  mounted(){
    // let span = this.$el.getElementsByClassName('span-txt')[0];

  }

};
</script>
<style scoped>
/* 主背景颜色 */
.container {
  background-color: #ecf0f1;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
/* 内容区样式 */
.container .content {
  width: 854px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom:114px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  
  

}

/* 内容区导航区，样式设置*/
.content .nav {
  width: 150px;
  margin-right: 3px;
  background-color: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

/* 内容区右边个人中心样式*/
.content .personal-center {
  width: 704px;
  background-color: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
}
.content .personal-center .user-info{
  margin-top:50px;
}
/* 导航区、用户信息详情区列表样式*/
.content .nav ol,
.content .personal-center .user-info .user-detail ol {
  list-style: none;
}

/* 头部区样式 */
.container .header {
  height: 59px;
  background-color: #31363a;
  color: #f6f6f6;
  font-size: 16px;
  padding-right: 36px;
  padding-left: 142px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/*头部区左边样式 */
.container .header .header-left {
  height: 59px;
  line-height: 59px;
}

/* 头部区右边样式 */
.container .header .header-right {
  font-size: 12px;
  height: 59px;
  line-height: 59px;
}
/* 头部区右边，右边元素间隔设置*/
.container .header .header-right > * {
  margin-right: 14px;
}
/* 头部区右边，链接样式设置 */
.container .header .header-right a {
  color: #f6f6f6;
}


/*内容区中，导航区最上面文字的样式设置 */
.content .nav span{
/* .content .nav span{ */
  display: block;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  color: #383838;
  /* margin-top:22px; */ /* 无效？*/
  margin-left: 20px;
  margin-top: 22px;

}
/*内容区中，虚线样式设置 */
.content .personal-center .dashed {
  border-bottom: 1px dashed #dcdfe0;
  display: block;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 50px;
  margin-top:48px;
}
.content .nav ol {
  font-size: 12px;
  color: #383838;
  display: block;
  height: 28px;
  width: 123px;
  background-color: #d4ecfc;
  line-height: 28px;
  padding: 0px;
  margin-left: 14px;
  border-radius: 5px;
  margin-top:5px;
}
.content .nav li {
  text-align: left;
  margin-left: 20px;
}
.user-detail ol li{
  text-align: left;
  margin-bottom:35px;
}
/* 内容区账户信息区字体样式设置*/
.user-detail label,
.user-detail span,
.user-detail {
  font-size: 12px;
  color: #383838;

}
/* 账户信息明细名称格式 */
.user-detail label {
  font-weight: bold;
  display: inline-block;
  width: 289px;
  text-align: right;
  padding-right: 22px;
}
/* 修改密码链接样式调整 */
.user-detail span a{
  color:#32a7f1;
}
.content .personal-center .span-txt {
  position: absolute;
  top:22px;
  left:20px;
  font-size: 14px;
  font-weight: bold;
  color: #383838;
  width:56px;
}
/* 头像区样式 */
.user-info .user-portrait{
  position: absolute;
  top:138px;
  left:96px;
}
/* 头像区文字样式 */
.user-info .user-portrait span{
  display:block;
  font-size: 12px;
  color: #383838;
}
/* 头像图片样式*/
.content .personal-center .user-info .user-portrait img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>


