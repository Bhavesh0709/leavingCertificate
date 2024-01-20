import { IRequest, IResponse } from "../service/types";

export enum HTTPMethod {
    GET,
    POST,
    PUT,
    DELETE,
    PATCH
}

export interface Route {
    fullPath: string;
    method: HTTPMethod;
    controllerFunction: Controller;
}

export type Controller = (request: IRequest, response: IResponse) => Promise<IResponse>;
