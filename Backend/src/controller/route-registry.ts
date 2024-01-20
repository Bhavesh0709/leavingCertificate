import { BirthDetailsController } from "./BirthDetails";
import { HTTPMethod, Route } from "./routes";

export class RouteRegistry {
    getBirthDetailsRouteDefinitions(): Route[] {
        const birthDetailsController = new BirthDetailsController();
        return [
            {
                fullPath: '/getBirthInfo',
                method: HTTPMethod.GET,
                controllerFunction: birthDetailsController.getBirthInfo.bind(birthDetailsController)
            }
        ];
    }
}