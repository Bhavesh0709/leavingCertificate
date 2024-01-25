export interface IResponseType {
    message: string;
    name: string;
    status: number;
    data?: unknown
}

export type TSequelizeError = {
    name: string;
    errors: Record<string, unknown>[];
    parent: Record<string, unknown>;
    original: Record<string, unknown>;
    fields: Record<string, unknown>;
    sql: string;
}