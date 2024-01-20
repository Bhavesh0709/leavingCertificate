import { HTTPMethod, Route } from "../controller/routes";
import express from 'express';
import { RouteRegistry } from "../controller/route-registry";

const app = express();

const registerFullPathRoute = (route: Route) => {
    if (route.method == HTTPMethod.GET) {
        app.get(route.fullPath,route.controllerFunction);
    } else if (route.method == HTTPMethod.POST) {
        app.post(route.fullPath,route.controllerFunction);
    } else if (route.method == HTTPMethod.PUT) {
        app.put(route.fullPath,route.controllerFunction);
    } else if (route.method == HTTPMethod.DELETE) {
        app.delete(route.fullPath,route.controllerFunction);
    } else if (route.method == HTTPMethod.PATCH) {
        app.patch(route.fullPath,route.controllerFunction);
    }
};

const routeRegistry = new RouteRegistry();

routeRegistry.getBirthDetailsRouteDefinitions().map((route) => {
    registerFullPathRoute(route);
})

export default app;