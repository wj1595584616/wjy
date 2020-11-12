<template>
    <header id="app">
       <div class="center">
           XXX智慧社区管理系统
       </div>
       <div class="center-y"></div>
       <div class="center-e">
           <div style="margin-top:80px"><el-input v-model="input" placeholder="请输入用户名"></el-input></div>
           <div><el-input placeholder="请输入密码" v-model="password" show-password></el-input></div>
           <div><el-checkbox v-model="checked" style="float:right;margin-left:500px;">记住密码</el-checkbox></div>
           <div style="margin-top:30px;float:left;margin-left:40px">
               <router-link to="/Shou" tag="p">
                   <el-button type="primary" round class="center-box">登录</el-button>
               </router-link>
           </div>
       </div>
    </header>
</template>
<script>
export default {
    name:'Denglv',
     data() {
    return {
      input: '',
      password:'',
       checked: false
    }
  }
}
</script>
<style scoped>
    .center{
        margin-top: 190px;
        float: left;
        margin-left: 730px;
        margin-bottom: 10px;
        font-size: 40px;
        font-weight: 900;
        color: #ffffff;
    }
    #app{
        background-image: url('../assets/bg.png');
        background-size: 100% 990px;
        height: 990px;
        width: 100%;
    }
    body{
        margin: 0px;
        padding: 0px;
    }
    .center-y{
        background-image: url('../assets/t.png');
        background-size: 330px 350px;
        width: 330px;
        height: 350px;
        border-radius: 15px 0 0 15px;
        float: left;
        margin-left: 530px;
        clear: both;
    }
    .center-e{
        width: 480px;
        height: 350px;
        border-radius: 0 15px 15px 0;
        background: #ffffff;
        float: left;
        margin-left: 2px;
    }
    .center-e div{
        width: 400px;
        margin: 5px auto;
        font-size: 20px;
    }
    .center-e div input{
        height: 45px;
    }
    .center-box{
        width: 400px;
        margin-top: -10px;
    }
</style>