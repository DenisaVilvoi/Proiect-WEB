<template>
    <v-container>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
</v-container>
  </template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: './images/baraNav.jpg',
        },
        {
          src: './images/home.jpg',
        },
        {
          src: './images/topNews.jpg',
        },
        {
          src: './images/SearchNews.jpg',
        },
      ],
    }
  },
}
</script>