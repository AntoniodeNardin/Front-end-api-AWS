import { format } from "prettier";
import { createRouter, createWebHistory } from "vue-router";
import Instancias from "../views/Instancias.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name:"Instances",
            component:Instancias,
        },
    ],
});

export default router;
