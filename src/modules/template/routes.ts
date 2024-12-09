import { RouteRecordRaw } from "vue-router";

export const templateRoutes: RouteRecordRaw[] = [
    {
        path: "/template",
        name: "TemplatePage",
        component: () => import("./pages/TemplatePage.vue"),
    },
];
