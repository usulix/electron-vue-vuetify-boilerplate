<template>
  <div class="container">
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item,i) in settings" :key="i">
        <div slot="header">{{item.title}}</div>
        <v-card>
          <v-card-text>{{item.description}}</v-card-text>
          <v-text-field
              v-model="name"
              label="Name"
          ></v-text-field>
          <v-btn @click="setBaz">Set Baz</v-btn>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  export default {
    data () {
      return {
        settings: [
          {title: 'BazOption', description: 'Set Your Baz!'}
        ],
        name: ''
      }
    },
    methods: {
      setBaz () {
        //
      }
    }
  }
</script>