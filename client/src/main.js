import "./assets/main.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { plugin, defaultConfig } from "@formkit/vue";
import { createI18n } from "vue-i18n";
import config from "./formkit.config";

import App from "./App.vue";

import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";

import en from "./locales/en";
import pl from "./locales/pl";

const app = createApp(App);

const i18n = createI18n({
  locale: "en",
  messages: {
    en,
    pl,
  },
});

app.use(i18n);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(plugin, defaultConfig(config));

app.component("Button", Button);
app.component("Card", Card);
app.component("InputText", InputText);
app.component("Textarea", Textarea);

app.mount("#app");
