<template>

    <div class="searchbar">
           <form @submit.prevent="fetchSearchNews">
              <input type="text" placeholder="search..." v-model="searchWord">
           </form>
           <div class="search-icons">
            <i v-if="!isBusy" class="fas fa-search" @click="fetchSearchNews">cauta</i>
            <i class="fas fa-times" @click="fetchTopNews">sterge</i>
           </div>
    </div>
 
 
    <div class="result">
      <article v-for="(article, index) in articles" :key="index" @click="navTo(article.url)">
        <header>
          <img v-if="article.urlToImage" src="article.urlToImage" alt="">
          <i v-else class="fas fa-image"></i>
        </header>
        <section v-html="article.title"></section>
        <footer>
          <i class="fas fa-chevron-right"></i>
        </footer>
      </article>
    </div>

 
</template>

<script>


  export default {
  
  data:() => {
    return{
      apiUrl: '',
      apiKey:'db940e234fe142debfd9635b89ca8ece',
      isBusy: false,
      showloader: false,
      currentPage: 1,
      totalResults: 0,
      maxPerPage: 20,
      searchWord: '',
      articles: [],
      country: 'ro',
    }
  
 },
 methods:{
  navTo(url){
    window.open(url);

  },
  resetData(){
    this.currentPage=1;
    this.articles=[];
  },
  fetchSearchNews(){
    if(this.searchWord!=='')
    {
      this.apiUrl='https://newsapi.org/v2/everything?q='+ this.searchWord +
                 '&pageSize='+this.maxPerPage+
                 '&apiKey='+this.apiKey;
      this.isBusy=true;
      this.resetData();
      this.fetchData();
    }
    else{
      this.fetchTopNews();
    }
  
  },
   fetchTopNews(){
    this.apiUrl='https://newsapi.org/v2/top-headlines?country='+ this.country +
                 '&pageSize='+this.maxPerPage+
                 '&apiKey='+this.apiKey;
    this.isBusy=true;
    this.searchWord='';
    this.resetData();
    this.fetchData();
  },
  fetchData(){
    let req=new Request(this.apiUrl+'&page='+this.currentPage);
    fetch(req)
      .then((resp) =>resp.json())
      .then((data) =>{
        this.totalResults=data.totalResults;
        data.articles.forEach(element =>{
          this.articles.push(element);
        });
        this.isBusy=false;
        this.showloader=false;
      })
      .catch((error)=>{
        console.log(error);
      })
  }
 },

 created(){
  this.fetchTopNews();
 }
 
}
</script>

<style lang="scss" scoped>
  

</style>