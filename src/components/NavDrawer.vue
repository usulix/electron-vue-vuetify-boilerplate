<template>
  <div>
    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Electron-Vue-Vuetify Boilerplate</span>
      <v-text-field
          solo-inverted
          flat
          label="Search"
          prepend-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        clipped
        class="grey lighten-4"
        app
    >
      <v-list
          dense
          class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
              v-if="item.heading"
              :key="i"
              row
              align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-divider
              v-else-if="item.divider"
              :key="i"
              dark
              class="my-3"
          ></v-divider>
          <v-list-tile
              v-else
              :key="i"
              @click=""
              router :to="item.target"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
  /*
   * As far as I can tell, you have to have the toolbar and the navbar in the same component
   * for proper operation in Vuetify. I had difficult synchronizing the state (opened or closed)
   * when I tried to pass events from toolbar to navbar
   */
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { icon: 'dashboard', text: 'Dashboard', target: '/index'},
          { icon: 'lightbulb_outline', text: 'Notes' },
          { icon: 'touch_app', text: 'Reports', target: '/reports' },
          { divider: true },
          { heading: 'Labels' },
          { icon: 'add', text: 'Create New Foo' },
          { divider: true },
          { icon: 'archive', text: 'Archive' },
          { icon: 'delete', text: 'Trash' },
          { divider: true },
          { icon: 'settings', text: 'Settings', target: '/settings'},
          { icon: 'phonelink', text: 'Bar Keys' },
          { icon: 'help', text: 'Help' }
        ]
      }
    }
  }
</script>