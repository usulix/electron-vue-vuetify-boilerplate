<template>
  <div class="container">
    <div>
      <v-jumbotron color="grey lighten-2">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Welcome to your Electron - Vue- Vuetify App</h3>
              <span class="subheading">You can navigate.</span>
              <v-divider class="my-3"></v-divider>
              <div class="title mb-3">That is easy to do. Visit Settings or Reports.</div>
              <router-link to="/settings">
                <v-btn large color="primary" class="mx-0">Goto Settings</v-btn>
              </router-link>
              <router-link to="/reports">
                <v-btn large color="secondary" class="mx-0">Goto Reports</v-btn>
              </router-link>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  export default {
    data () {
      return {
        //
      }
    }
  }
</script>