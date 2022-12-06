<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <v-app>
    <v-app-bar title="Application"></v-app-bar>

    <v-navigation-drawer>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

<div class="wrapper">
  <HelloWorld msg="You did it!" />
</div>
<v-btn variant="outlined">
  Button
</v-btn>
</v-navigation-drawer>

    <v-main> 
      <TheWelcome />
    </v-main>
  </v-app>
</template>



<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
