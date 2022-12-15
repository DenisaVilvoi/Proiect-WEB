<template>
    <div :is="takeCountry()"></div>
    <div :is="fetchTopNews()"></div>
    <v-main>
 <div v-for="(art,index) in articol" :key="index" >
                
      
           <v-fade-transition mode="out-in">
                <v-row>
                    <v-col cols="4" >
                        <v-card :href="art.url" >
                            <v-img :src="this.articol[index].urlToImage" height="300"></v-img>
                            <v-card-title class="text-h6">
                                {{ art.title }}
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="4" >
                        <v-card :href="art.url" >
                            <v-img :src="this.articol[index+1].urlToImage" height="300"></v-img>
                            <v-card-title class="text-h6">
                                {{ art.title }}
                            </v-card-title>
                        </v-card>
                    </v-col>
                    <v-col cols="4" >
                        <v-card :href="art.url" >
                            <v-img :src="this.articol[index+1].urlToImage" height="300"></v-img>
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
    }, methods: {
        async fetchTopNews() {

            await fetch(`https://newsapi.org/v2/top-headlines?country=${this.country}&pageSize=${this.maxPerPage}&apiKey=${this.apiKey}`)
                .then((resp) => resp.json())
                .then((data) => {
                    for (let index = 0; index < data.articles.length; index++) {
                        this.articol[index] = data.articles[index];

                    }
                    console.log(data.articles[1].url)
                    console.log(data)

                });

        },

         takeCountry(test) {
    console.log(test)
    }
    },
  
}
</script>