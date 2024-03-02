export type IMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';

export interface ISuccessResponse {
    message: string;
    name: string;
    data: any;
}
