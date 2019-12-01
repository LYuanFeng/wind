<template>
  <div class="body">
    <nav-aside></nav-aside>
    <main-body></main-body>
  </div>
</template>

<script>
import navAside from '../Sidebar/Aside'
import mainBody from '../Main/Main'
export default {
  name: 'mainlayout',
  data () {
    return {
      msg: 'My name is mainlayout'
    }
  },
  components:{
    navAside,
    mainBody
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import '../../../styles/scss/style.scss';

</style>

