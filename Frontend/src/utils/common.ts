export const parseResponse = async (promise: Promise<any>): Promise<any> => {
    return promise
        .then((data) => {
            return [null, data];
        })
        .catch((err) => [err]);
};
