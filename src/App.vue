<template>
<main>
    <v-app>
      <v-app-bar title="My Deck">
        <v-btn href="#/news" icon="mdi-home">a</v-btn>
        <v-btn @click="toggleTheme" icon="mdi-animation">b</v-btn>
      </v-app-bar>
      <v-main>
        <component :is="currentView" />
      </v-main>
    </v-app>
  </main>

    </template>
    
    <script>
    import NewsApp from "./components/NewsApp.vue"
    import { useTheme } from "vuetify";
    import NotFound from "./404.vue"

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
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
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
