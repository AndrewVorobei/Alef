import { createRouter, createWebHistory } from "vue-router";
import FormPage from "@/pages/FormPage.vue";
import PreviewPage from "@/pages/PreviewPage.vue";

const routes = [
  { path: "/", component: FormPage },

  {
    path: "/preview",
    component: PreviewPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
