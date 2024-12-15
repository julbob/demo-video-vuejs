import AuthenticationPage from "@/views/AuthenticationPage.vue";
import AuthorPage from "@/views/AuthorPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/authors'},
    { path: '/authors', component: AuthorPage},
    { path: '/connect', component: AuthenticationPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;