<template>
  <v-app-bar color="transparent" app fixed>
    <v-icon class="main-icon" large color="white">
      mdi-silverware-fork-knife
    </v-icon>

    <v-toolbar-title class="title">Beef Smelter</v-toolbar-title>

    <v-spacer></v-spacer>

    <div>
      <router-link
        v-show="$vuetify.breakpoint.smAndUp"
        v-for="menuItem in menuItems"
        :key="menuItem.name"
        :to="menuItem.routeLink"
        class="text-decoration-none"
        exact
      >
        <v-btn
          color="transparent"
          large
          class="font-weight-bold white--text ml-4"
        >
          {{ menuItem.name }}
        </v-btn>
      </router-link>
    </div>
    <v-menu bottom origin="center center" transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-show="$vuetify.breakpoint.smAndDown"
          color="teal lighten-4"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="#625757"> mdi-menu </v-icon>
        </v-btn>
      </template>
      <v-list color="transparent">
        <v-list-item v-for="menuItem in menuItems" :key="menuItem.name">
          <v-list-item-title
            ><router-link
              :key="menuItem.name"
              :to="menuItem.routeLink"
              exact
              class="text-decoration-none white--text"
            >
              {{ menuItem.name }}
            </router-link></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      menuItems: [
        {
          name: 'Home',
          routeLink: { name: 'Home', hash: '#home' }
        },
        {
          name: 'About',
          routeLink: { name: 'About', hash: '#about' }
        },
        {
          name: 'Menu',
          routeLink: { name: 'Menu', hash: '#menu' }
        },
        {
          name: 'Gallery',
          routeLink: { name: 'Gallery', hash: '#gallery' }
        }
      ]
    }
  }
}
</script>
<style>
.main-icon {
  margin-right: 25px;
}
.title {
  color: white !important;
}
</style>
