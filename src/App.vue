<template>
  <main>
    <v-app>

      <v-app-bar color="orange" elevation="30" rounded title="NewsApp">
     
        <v-btn href="#/news" icon="mdi-magnify"></v-btn>
        <v-btn href="#/" icon="mdi-home"></v-btn>
        <v-btn @click="toggleTheme" icon="mdi-animation"></v-btn>

      </v-app-bar>
      
       
      <v-main>
        <component :is="currentView" />
        <home v-if="(this.currentPath !== '#/news')" />
      </v-main>

    </v-app>

  </main>
</template>
    
<script>
import Search from "./components/Search.vue";
import home from "./components/Home.vue";
import { useTheme } from "vuetify";


const routes = {
  "/news": Search,
  "/": home,
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
    return { currentPath: window.location.hash,
 
     
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"];
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

