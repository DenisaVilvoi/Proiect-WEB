<script>
export default {

  data: () => {
    return {
      apiUrl: '',
      apiKey: '0f1474d83bd949f19136c98385038937',
      currentPage: 1,
      totalResults: 0,
      maxPerPage: 20,
      searchWord: '',
      articol: [],
      country: 'ro',

    }

  },
  methods: {

    async fetchSearchNews() {

      this.searchWord = document.getElementById("Search").value;
      this.apiUrl = 'https://newsapi.org/v2/everything?q=' + this.searchWord +
        '&pageSize=' + this.maxPerPage +
        '&apiKey=' + this.apiKey;

      if (this.searchWord !== '') {
        await fetch(this.apiUrl)
          .then(resp => resp.json())
          .then(data => {
            for (let index = 0; index < data.articles.length; index++) {
              this.articol[index] = data.articles[index];

            }
            console.log(data);
          });

      }
     

    },
   

  },



}
</script>

<template>
  
  <v-main>
    <div class="searchbar">
      <v-text-field dense label="Search" id="Search"></v-text-field>
      <v-btn  icon="mdi-card-search" depressed @click="fetchSearchNews"></v-btn>    
      <v-btn icon="mdi-close" href="#/" ></v-btn>

    </div>

    <div v-for="art in articol">
   
      <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card :href="art.url">
            <v-img
              :src="art.urlToImage"
              height="400"
        
            ></v-img>
            <v-card-title class="text-h6">
            {{ art.title }}
            </v-card-title>
          </v-card>
        </v-col>

   
      </v-row>
    </v-fade-transition>

    </div>
  </v-main>

</template>
<style>
#titlu {
  position: absolute;
}
</style>