<template>
    <h1>denisa</h1>
    <v-btn @click="getApi">buton</v-btn>
    {{this.getNews}}
</template>

<script>

export default {
  data(){
    return{
      getNews:null,
      getTitle:null,
      articles: []
      
    };
  
 },
 methods:{
    getApi(){
      const Url="https://newsapi.org/v2/everything?q=tesla&from=2022-11-07&sortBy=publishedAt&apiKey=db940e234fe142debfd9635b89ca8ece";
      fetch(Url)
      .then(response=>response.json())
      .then(data=>{
        var count=Object.keys(data).length;
        for (let index = 0; index < count; index++) {
        this.articles[index]=data.articles[index]
        console.log(data)
        console.log(data.articles)
    }
  console.log(this.articles[3])})
      
    }
  }
}
</script>