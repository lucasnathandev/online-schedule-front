import { defineAsyncComponent } from "vue";
export const views = {
  HomeView: defineAsyncComponent(() => import("./HomeView.vue")),
  HelloView: defineAsyncComponent(() => import("./HelloView.vue")),
};
