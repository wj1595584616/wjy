<template>
  <div id="cent-left">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#623bfe"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <router-link to="/Shou" tag="p"
            ><el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item></router-link
          >
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>智慧物业</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">物业缴费</el-menu-item>
              <router-link to="/Yuyue" tag="p"
                ><el-menu-item index="2-2">缴费查询</el-menu-item></router-link
              >
              <el-menu-item index="2-3">故障报修</el-menu-item>
              <el-menu-item index="2-4">公告管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-first-aid-kit"></i>
              <span slot="title">社交医疗</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">预约挂号</el-menu-item>
              <el-menu-item index="3-2">健康小贴士</el-menu-item>
              <el-menu-item index="3-3">医生简介</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">智能应用</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">智能停车</el-menu-item>
              <el-menu-item index="4-2">智能开门</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span slot="title">数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">房屋分类统计2</el-menu-item>
              <el-menu-item index="5-2">缴费分析系统</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-s-management"></i>
              <span slot="title">基本信息</span>
            </template>
            <el-menu-item-group>
              <router-link tag="span" to="/Fangwxx"><el-menu-item index="6-1">房屋信息</el-menu-item></router-link>
              <el-menu-item index="6-2">人口信息</el-menu-item>
              <el-menu-item index="6-3">设备信息</el-menu-item>
              <el-menu-item index="6-4">电子地图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-s-cooperation"></i>
              <span slot="title">系统管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/Yonghgl" tag="span"
                ><el-menu-item index="6-1">用户管理</el-menu-item></router-link
              >
              <router-link to="/Juesgl" tag="span"
                ><el-menu-item index="6-2">角色管理</el-menu-item></router-link
              >
              <router-link to="/Quanxgl" tag="span">
                <el-menu-item index="6-3">权限管理</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
#cent-left {
  float: left;
  width: 251px;
  margin-top: 20px;
  height: 815px;
  background: rgb(185, 109, 255);
}
.tac {
  width: 503px;
}
</style>
<script>
export default {
  name: "Left",
};
</script>