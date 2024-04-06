import { HTTPMethod, Route } from '../controller/routes';
import express from 'express';
import { RouteRegistry } from '../controller/route-registry';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

const registerFullPathRoute = (route: Route) => {
    if (route.method == HTTPMethod.GET) {
        app.get(route.fullPath, route.controllerFunction);
    } else if (route.method == HTTPMethod.POST) {
        app.post(route.fullPath, route.controllerFunction);
    } else if (route.method == HTTPMethod.PUT) {
        app.put(route.fullPath, route.controllerFunction);
    } else if (route.method == HTTPMethod.DELETE) {
        app.delete(route.fullPath, route.controllerFunction);
    } else if (route.method == HTTPMethod.PATCH) {
        app.patch(route.fullPath, route.controllerFunction);
    }
};

const routeRegistry = new RouteRegistry();

routeRegistry.getBirthDetailsRouteDefinitions().map((route) => {
    registerFullPathRoute(route);
});

routeRegistry.getComplimentRouteDefinitions().map((route) => {
    registerFullPathRoute(route);
});

routeRegistry.getDivisionRouteDefinitions().map((route) => {
    registerFullPathRoute(route);
});
routeRegistry.getMasterRouteDefinitions().map((route) => {
    registerFullPathRoute(route);
});
routeRegistry.generatePDF().map((route) => {
    registerFullPathRoute(route);
});
export default app;
