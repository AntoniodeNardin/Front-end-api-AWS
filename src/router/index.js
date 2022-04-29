import { createRouter, createWebHistory } from "vue-router";
import LastestSales from "../views/LastestSale.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name:"Instances",
            component:LastestSales,
        }
    ],
});

export default router;
