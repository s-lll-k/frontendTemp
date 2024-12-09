import { RouteRecordRaw } from "vue-router";
import { templateRoutes } from "../modules/template/routes";

const routes: RouteRecordRaw[] = [
    ...templateRoutes,
    {
        path: "/:catchAll(.*)", // Обработка неизвестных маршрутов
        redirect: "/",
    },
];

export default routes;
