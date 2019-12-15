<template>
  <div>
    <router-link :to="url">
      <li :class="onClick">{{name}}</li>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarNavLink',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    onClick : function() {
      if(this.$route.path === this.url){
        return 'current'
      }else {
        return ''
      }
    }
  },
  data () {
    return {
      msg: 'My name is SidebarNavLink'
    }
  },
}
</script>


