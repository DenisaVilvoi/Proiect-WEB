<template>
  <main>
      <v-app>

        <v-app-bar
          color="orange"
          elevation="20"
          rounded 
          title="NewsApp">
          <v-btn href="/news" icon="">Search</v-btn>
          <v-btn @click="toggleTheme">Theme</v-btn>
          
        </v-app-bar>

        <v-main>
          <component :is="currentView" />
        </v-main>

      </v-app>

    </main>
  </template>
    
<script lang="ts">
  import NewsApp from "./components/NewsApp.vue"
  import { useTheme } from "vuetify";

  
  const routes = {
  "/news": NewsApp,
};

export default {
  setup() {
    const theme = useTheme();
    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] ;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  methods: {},
};
</script>

