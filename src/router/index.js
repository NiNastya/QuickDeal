import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import("../views/Home.vue"),
    },
    {
        path: "/task/:id",
        name: "TaskId",
        component: () =>
            import("../views/Task.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
        return { top: 0, behavior: 'smooth' }
    },
    routes,
});

export default router;

