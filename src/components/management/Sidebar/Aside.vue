<template>
  <aside class="stable">
    <div class="nav-logo">
      <img src='/static/img/logo.png' class="logo"/>
    </div>
    <div class="nav-sidebar">
      <el-collapse accordion>
        <template v-for="(navRegion, iR) in data.navRegion">
          <div class="navRegion"><i class="el-icon-s-data" style="margin: 0 0.5rem 0 0"></i>{{navRegion.navRegionName}}</div>
          <div  v-for="(navClass, iC) in navRegion.child">
            <el-collapse-item>
              <template slot="title">
                {{navClass.navClassName}}
              </template>
              <ul>
                <div v-for="(nav, i) in navClass.child">
                  <SidebarNavLink :url="nav.navUrl" :name="nav.navName"></SidebarNavLink>
                </div>
              </ul>
            </el-collapse-item>
          </div>
          <div style="height:30px"></div>
        </template>
      </el-collapse>
      
    </div>
  </aside>
</template>

<script>
import SidebarNavLink from './SidebarNavLink'
export default {
  name: 'Aside',
  data () {
    return {
      msg: 'My name is mainlayout',
      data: {
        navRegion: [{navRegionName: '站点维护',child: [{navClassName: '首页维护', child:[{navUrl: '/wind/mainLayout/p01', navName: 'Logo维护'},{navUrl: '/wind/mainLayout/p02', navName: '导航维护'},{navUrl: '/p01', navName: '轮播图'}]},{navClassName: '产品维护', child:[{navUrl: '/p01', navName: '轮播图'}]}]},{navRegionName: '用户维护',child: [{navClassName: '客户维护', child:[{navUrl: '/p01', navName: '客户列表'},{navUrl: '/p01', navName: '导航维护'},{navUrl: '/p01', navName: '轮播图'}]}]}]
      }
    }
  },
  components: {
    SidebarNavLink
  }
}
</script>

<style>
/* 重置 ElementUI 样式*/
  .el-collapse{
    border: 0;
  }
  .el-collapse-item__header{
    color: #838790; 
    background-color: #333844;
    border: 0;
    padding: 0 20px;
  }
  .el-collapse-item__wrap{
    border:0;
    color: #838790; 
    background-color: #333844;
  }
  .el-collapse-item__content{
    color: #838790;
    padding: 0;
  }
</style>

