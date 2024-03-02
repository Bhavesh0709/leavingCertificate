import { IMethod, ISuccessResponse } from './types';
import { nanoid } from 'nanoid';

export const getContentType = (res: any): string => {
    const isJSON = res.headers.get('Content-Type')?.startsWith('application/json') || false;

    if (isJSON) {
        return 'JSON';
    }

    const isText = res.headers.get('Content-Type')?.startsWith('text') || false;
    if (isText) {
        return 'Text';
    }

    return 'Unsupported';
};

const processResponse = async (res: any) => {
    const contentType = getContentType(res);

    if (res.ok) {
        if (contentType === 'JSON') {
            return await res.json();
        } else {
            return res;
        }
    }
};

const accessApi = async (
    method: IMethod,
    url: string,
    body?: Record<string, unknown>
): Promise<Record<string, unknown>> => {
    const baseUrl = 'http://127.0.0.1:3309';
    const result = await fetch(baseUrl + url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'trace-id': nanoid()
        }
    });
    if (result.ok) {
        return await processResponse(result);
    } else {
        const errorMessage = (await result.json()).message;
        console.log('== error message - ', errorMessage);
        if (Array.isArray(errorMessage)) {
            throw new Error(JSON.stringify(errorMessage));
        }
        throw new Error(errorMessage);
    }
};

export const get = async (url: string): Promise<Record<string, unknown> | ISuccessResponse> => {
    return await accessApi('GET', url);
};

export const post = async (
    url: string,
    body: Record<string, unknown>
): Promise<Record<string, unknown> | ISuccessResponse> => {
    return await accessApi('POST', url, body);
};

export const put = async (
    url: string,
    body: Record<string, unknown>
): Promise<Record<string, unknown> | ISuccessResponse> => {
    return await accessApi('PUT', url, body);
};

export const del = async (url: string): Promise<Record<string, unknown>> => {
    return await accessApi('DELETE', url);
};
