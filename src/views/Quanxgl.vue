<template>
    <div id="app">
        <Dao></Dao>
        <Tou></Tou>
        <div class="box">权限管理</div>
        <div class="box1">
            <div class="box2">
                <div>角色管理</div>
                <div>系统管理员</div>
                <div>社区管理员</div>
                <div>运维人员</div>
                <div>物业人员</div>
            </div>
             <div class="biao">
        </div>
        </div>
    </div>
</template>
<script>
import Tou from '../components/Dao'
import Dao from '../components/Tou'
export default {
    name:'Quanxgl',
    components:{
        Tou,
        Dao
    }
}
</script>
<style scoped>
.box {
  width: 1550px;
  height: 40px;
  background: linear-gradient(90deg, #b6a4fe, #fff);
  float: left;
  margin-left: 20px;
  margin-top: 21px;
  color: #fff;
  line-height: 40px;
  font-weight: 900;
  text-indent: 30px;
}
.box1 {
  width: 1550px;
  height: 1000px;
  border: 1px solid #dfdff9;
  float: left;
  margin-left: 20px;
}
.box2{
    width: 220px;
    height: 900px;
    border: 1px solid #dedeff;
    font-size: 16px;
    text-align: center;
    margin-left: 10px;
    margin-top: 50px;
    float: left;
}
.box2 div{
    padding: 17px 0px;
    border: 1px solid #dedeff;
}
.box2 div:nth-of-type(1){
    background-color: #bcabff;
    font-weight: 900;
    color: #fff;
}
.box2 div:nth-of-type(2){
    background-color: #666699;
    color: #fff;
}
.biao{
    margin-left: 30px;
    float: left;
    margin-top: 30px;
}
.b{
    border: 1px solid #666699;
}
</style>