<template>
  <div class="body">
    <aside class="stable">
      <!-- {{msg}} -->
      <div class="nav-logo">
        <img src='/static/img/logo.png' class="logo"/>
      </div>
      <div class="nav-sidebar">
        <div style="height:200px;width: 100px;">4444</div>
        <div style="height:200px;width: 100px;">4444</div>
        <div style="height:200px;width: 100px;">4444</div>
        <div style="height:200px;width: 100px;">4444</div>
        <div style="height:200px;width: 100px;">4444</div>
      </div>
    </aside>
    <main class="change">
      <header class="main-header">1</header>
      <!-- <main class="main-body">2</main>
      <footer class="main-footer">3</footer> -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'mainlayout',
  data () {
    return {
      msg: 'My name is mainlayout'
    }
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import '../../../styles/scss/style.scss';

</style>

