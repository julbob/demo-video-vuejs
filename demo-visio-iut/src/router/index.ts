import AuthorPage from "@/views/AuthorPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/authors'},
    { path: '/authors', component: AuthorPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;