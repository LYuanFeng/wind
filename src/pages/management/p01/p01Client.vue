<template>
  <div>
      {{msg}}
  </div>
</template>

<script>

export default {
  name: 'p01Client',
  data () {
    return {
      msg: 'My name is p01'
    }
  },
  mounted: async function() {
    console.log('luyou', this.$route)
  }
}
</script>

