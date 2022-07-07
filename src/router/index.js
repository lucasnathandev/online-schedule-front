import { createRouter, createWebHistory } from "vue-router";
import { views } from "@/views/export";
const { HelloView, HomeView } = views;

const routes = [
  new Route("/", HomeView, "Home"),
  new Route("/hello", HelloView, "Hello"),
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// Functions

function Route(path, component, name = "", options = {}) {
  return {
    path,
    component,
    name,
    ...options,
  };
}
