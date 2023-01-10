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

<template>
    <div :is="takeCountry()"></div>
    <div :is="fetchTopNews()"></div>
    <v-main>
        <v-banner align="center">
            <h1>TOP DAILY NEWS</h1>
        </v-banner>
        <div v-for="art in articol" :key="art">
            <v-container class="fill-height" fluid style="min-height: 434px">
                <v-fade-transition mode="out-in">
                    <v-row>

                        <v-col align="center">
                            <v-card :href="art.url" width="60%">
                                <v-img :src="art.urlToImage"></v-img>
                                <v-card-title>
                                    {{ art.title }}
                                </v-card-title>
                            </v-card>
                        </v-col>

                    </v-row>
                </v-fade-transition>
            </v-container>

        </div>
    </v-main>
</template>

