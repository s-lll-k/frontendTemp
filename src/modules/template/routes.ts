import { RouteRecordRaw } from "vue-router";

export const templateRoutes: RouteRecordRaw[] = [
    {
        path: "/template",
        name: "TemplatePage",
        component: () => import("./pages/TemplatePage.vue"),
    },
    {
        path: "/MainPage",
        name: "MainPage",
        component: () => import("./pages/MainPage.vue"),
    },
];
