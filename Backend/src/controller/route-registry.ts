import { BirthDetailsController } from "./BirthDetails";
import { ComplimentController } from "./Compliment";
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
    getComplimentRouteDefinitions(): Route[] {
        const complimentController = new ComplimentController();
        return [
            {
                fullPath: '/addCompliment',
                method: HTTPMethod.POST,
                controllerFunction: complimentController.addCompliment.bind(complimentController)
            },
            {
                fullPath: '/getCompliment',
                method: HTTPMethod.GET,
                controllerFunction: complimentController.getCompliment.bind(complimentController)
            }
        ]
    }
}