export class FormatResponse {
    format(response) {
        const data: any[] = [];
        if (response.length > 0) {
            response.map((obj) => {
                const dataVal = obj.dataValues;
                data.push(dataVal);
            })
        } else {
            data.push(response.dataValues);
        }
        return data;
    }
}