import moment from 'moment';
export class DateTimeService {
    formatDate(date: Date): string {
        return moment(date).format('DD/MM/YYYY');
    }
    convertStringToDate(date: string): Date {
        return moment(date, 'YYYY-MM-DD').toDate();
    }
    formatDateInMarathi(date: Date): string {
        const englishToMarathiDigits = {
            '0': '०',
            '1': '१',
            '2': '२',
            '3': '३',
            '4': '४',
            '5': '५',
            '6': '६',
            '7': '७',
            '8': '८',
            '9': '९'
        };

        const momentDate = moment(date);
        const day = momentDate.format('DD');
        const month = momentDate.format('MM');
        const year = momentDate.format('YYYY');

        const replaceDigits = (str) =>
            str
                .split('')
                .map((char) => englishToMarathiDigits[char] || char)
                .join('');

        const dayInMarathi = replaceDigits(day);
        const monthInMarathi = replaceDigits(month);
        const yearInMarathi = replaceDigits(year);

        return `${dayInMarathi}/${monthInMarathi}/${yearInMarathi}`;
    }
}
