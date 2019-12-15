<template>
  <main class="main-body">
    <!-- <el-row> -->
      <!-- <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button> -->
    <!-- </el-row> -->
    <!-- <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-radio v-model="radio2" label="1">备选项</el-radio>
    <el-radio v-model="radio2" label="2">备选项</el-radio> -->
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'MainBody',
  data () {
    return {
      msg: 'My name is mainlayout',
      radio: '1',
      radio2: '1',
    }
  }
}
</script>

