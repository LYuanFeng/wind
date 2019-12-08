<template>
  <aside class="stable">
    <div class="nav-logo">
      <img src='/static/img/logo.png' class="logo"/>
    </div>
    <div class="nav-sidebar">
      <el-collapse accordion>
        <template v-for="(navRegion, iR) in data.navRegion">
          <div class="navRegion">{{navRegion.navRegionName}}</div>
          <div  v-for="(navClass, iC) in navRegion.child">
            <el-collapse-item>
              <template slot="title">
                {{navClass.navClassName}}<i class="header-icon el-icon-info"></i>
              </template>
              <ul>
                <li v-for="(navName, i) in navClass.child">
                  {{navName}}
                </li>
              </ul>
            </el-collapse-item>
          </div>
            
          
        </template>
      </el-collapse>
      
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      msg: 'My name is mainlayout',
      data: {
        navRegion: [{navRegionName: '站点维护',child: [{navClassName: '首页维护', child:['Logo维护', '导航维护', '轮播图']},{navClassName: '产品维护', child:['产品维护']}]},{navRegionName: '用户维护',child: [{navClassName: '用户列表', child:['Logo维护', '导航维护', '轮播图']}]}]
      }
    }
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
  }
  .el-collapse-item__wrap{
    border:0;
    color: #838790; 
    background-color: #333844;
  }
  .el-collapse-item__content{
    color: #838790;
  }
</style>

