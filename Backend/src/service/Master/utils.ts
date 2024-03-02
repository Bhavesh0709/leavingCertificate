import { TMasterDBInput, TMasterDBOutput } from '../../models/Master/types';
import BirthInfo from '../BirthDetails';
import ComplimentService from '../Compliment';
import { DateTimeService } from '../dateTime';
import DivisionService from '../Division';

export class ModifyObject {
    private dateTimeService: DateTimeService;
    private complimentService: ComplimentService;
    private divisionService: DivisionService;
    private birthInfo: BirthInfo;
    constructor() {
        this.dateTimeService = new DateTimeService();
        this.complimentService = new ComplimentService();
        this.divisionService = new DivisionService();
        this.birthInfo = new BirthInfo();
    }
    modifyAddUserObject = (data: TMasterDBInput): TMasterDBOutput => {
        const obj: any = { ...data };
        obj.dateOfAdmission = this.dateTimeService.convertStringToDate(obj.dateOfAdmission);
        obj.birthDate = this.dateTimeService.convertStringToDate(obj.birthDate);
        const newData: TMasterDBOutput = obj;
        return newData;
    };

    modifyGetUserObject = async (data: TMasterDBOutput) => {
        console.log('== data - ', data);
        const result = await this.getCustomizedInfo(
            data.progressInStudy,
            data.behaviour,
            data.division,
            data.birthPlace
        );
        const finalObj = { ...data, ...result };
        return finalObj;
    };
    getCustomizedInfo = async (progressInStudy: number, behaviour: number, division: number, birthPlaceId: number) => {
        const _progressInStudy = await this.complimentService.getComplimentById(progressInStudy);
        const _behaviour = await this.complimentService.getComplimentById(behaviour);
        const _division = await this.divisionService.getDivisionById(division);
        const birthPlace = await this.birthInfo.getBirthInfoById(birthPlaceId);
        return {
            progressInStudy: _progressInStudy,
            behaviour: _behaviour,
            division: _division,
            ...birthPlace
        };
    };
}
