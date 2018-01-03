<template>
  <v-app>
  <!-- hamburger menu toolbar -->
    <v-navigation-drawer absolute light temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  <!-- end hamburger menu toolbar -->

  <!-- header toolbar -->
    <v-toolbar dark class="blue-grey lighten-1" >
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up" />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">BoardUp</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="item in menuItems" :key="item.title" class="hidden-xs-only" >
        <v-btn flat :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  <!-- end header toolbar -->

  <!-- page content -->
    <main>
      <router-view></router-view>
    </main>
  <!-- end page content -->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { title: 'Register', icon: 'face', link: '/register' },
          { title: 'Login', icon: 'lock_open', link: '/login' }
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            { title: 'View Meetups', icon: 'supervisor_account', link: '/meetups' },
            { title: 'Organize Meetup', icon: 'room', link: '/meetup/new' },
            { title: 'Profile', icon: 'person', link: '/profile' }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>
