<template>
  <v-toolbar color="amber" app absolute clipped-left>
    <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
    <span class="title ml-3 mr-5">EZ Aws Api Gateway</span>
    <v-text-field
        solo-inverted
        flat
        label="Search"
        prepend-icon="search"
    ></v-text-field>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<style lang="scss" scoped>

</style>
<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>