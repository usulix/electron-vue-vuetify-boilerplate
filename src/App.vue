<template>
  <v-app id="inspire">
    <nav-drawer></nav-drawer>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import NavDrawer from './components/NavDrawer.vue'

  export default {
    components: {
      NavDrawer
    },
    data: () => ({
      //
    }),
    props: {
      source: String
    }
  }
</script>

<style>
  #inspire {
    width:100%;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
</style>

