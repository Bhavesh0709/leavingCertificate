import moment from 'moment';
export class DateTimeService {
    formatDate(date: Date): string {
        return moment(date).format('DD/MM/YYYY');
    }
    convertStringToDate(date: string): Date {
        return moment(date, 'YYYY-MM-DD').toDate();
    }
}
