import { createApp } from 'vue'
import App from './App.vue'
//se incarca css
import './assets/main.css'
// Plugins
import { registerPlugins } from "@/plugins";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
  });
  
// Register plugins
const app = createApp(App);
registerPlugins(app);



createApp(App).use(vuetify).mount("#app");
