<template>
  <main class="main">
    <main-header></main-header>
    <main-body></main-body>
    <main-footer></main-footer>
  </main>
</template>

<script>
import mainHeader from './MainHeader'
import mainBody from './MainBody'
import mainFooter from './MainFooter'
export default {
  name: 'Main',
  data () {
    return {
      msg: 'My name is mainlayout'
    }
  },
  components:{
    mainHeader,
    mainBody,
    mainFooter
  }
}
</script>

