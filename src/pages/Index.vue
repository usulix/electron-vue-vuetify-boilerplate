<template>
  <div class="container">
    <div v-if="!credentialsFound">
      <v-jumbotron color="grey lighten-2">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Welcome to your AWS API Gateway Dashboard</h3>
              <span class="subheading">To get started, you will need to save your IAM credentials.</span>
              <v-divider class="my-3"></v-divider>
              <div class="title mb-3">That is easy to do in settings.</div>
              <router-link to="/settings">
                <v-btn large color="primary" class="mx-0">Goto Settings</v-btn>
              </router-link>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </div>
    <div v-else>
      Good to go {{username}}
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
        'credentialsFound'
      ])
    },
    data () {
      return {
        username: process.env.USERNAME
      }
    }
  }
</script>