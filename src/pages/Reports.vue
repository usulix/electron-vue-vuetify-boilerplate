<template>
  <div class="container">
    <div>
      Good to go <strong style="color:orangered;">{{username}}</strong>.
      You have some Foo-Bars, and "Yes, <strong style="color:orangered;">{{cappedName}}</strong>"
      ... native apps have more privileges.
      <div v-for="(item, i) in getFooBars">
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'getFooBars'
      ]),
      cappedName () {
        return process.env.USERNAME.charAt(0).toUpperCase() + process.env.USERNAME.slice(1)
      }
    },
    data () {
      return {
        username: process.env.USERNAME
      }
    }
  }
</script>