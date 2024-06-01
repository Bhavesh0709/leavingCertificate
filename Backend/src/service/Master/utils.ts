import moment from 'moment';
import { TMasterDBInput, TMasterDBOutput } from '../../models/Master/types';
import BirthInfo from '../BirthDetails';
import ComplimentService from '../Compliment';
import { DateTimeService } from '../dateTime';
import DivisionService from '../Division';
import { ToWords } from 'to-words';
import { monthsInMarathi } from './constants';
import ReligionAndCaste from '../ReligionAndCastes';
import SheraService from '../Shera';
import Shera from '../../models/Shera';

export class ModifyObject {
    private dateTimeService: DateTimeService;
    private complimentService: ComplimentService;
    private divisionService: DivisionService;
    private religionAndCasteService: ReligionAndCaste;
    private sheraService: SheraService;
    private birthInfo: BirthInfo;
    constructor() {
        this.dateTimeService = new DateTimeService();
        this.complimentService = new ComplimentService();
        this.divisionService = new DivisionService();
        this.religionAndCasteService = new ReligionAndCaste();
        this.birthInfo = new BirthInfo();
        this.sheraService = new SheraService();
    }
    modifyAddUserObject = (data: TMasterDBInput): TMasterDBOutput => {
        const obj: any = { ...data };
        obj.dateOfAdmission = this.dateTimeService.convertStringToDate(obj.dateOfAdmission);
        obj.birthDate = this.dateTimeService.convertStringToDate(obj.birthDate);
        obj.schoolLeavingDate = this.dateTimeService.convertStringToDate(obj.schoolLeavingDate);
        const newData: TMasterDBOutput = obj;
        return newData;
    };

    modifyGetUserObject = async (data: TMasterDBOutput | null) => {
        if (data) {
            const {
                progressInStudy,
                behaviour,
                division,
                birthDate,
                birthPlace,
                dateOfAdmission,
                schoolLeavingDate,
                religion,
                caste,
                subCaste,
                shera
            } = data;
            const result = await this.getCustomizedInfo(
                progressInStudy,
                behaviour,
                division,
                birthPlace,
                birthDate,
                dateOfAdmission,
                schoolLeavingDate,
                religion,
                caste,
                subCaste,
                shera
            );
            const finalObj = { ...data, ...result };
            return finalObj;
        }
        return null;
    };
    getCustomizedInfo = async (
        progressInStudy: number,
        behaviour: number,
        division: number,
        birthPlaceId: number,
        birthDate: Date,
        dateOfAdmission: Date,
        schoolLeavingDate: Date,
        religion: number,
        caste: number,
        subCaste: number,
        shera: number | undefined
    ) => {
        const _progressInStudy = await this.complimentService.getComplimentById(progressInStudy);
        const _behaviour = await this.complimentService.getComplimentById(behaviour);
        const _division = await this.divisionService.getDivisionById(division);
        const birthPlace = await this.birthInfo.getBirthInfoById(birthPlaceId);
        const birthDateInWords = this.getBirthDateInWords(birthDate);
        const formattedBirthDate = this.dateTimeService.formatDate(birthDate);
        const formattedDateofAdmission = this.dateTimeService.formatDate(dateOfAdmission);
        const formattedSchoolLeavingDate = this.dateTimeService.formatDate(schoolLeavingDate);
        const _religion = await this.religionAndCasteService.getReligionById(religion);
        const _caste = await this.religionAndCasteService.getCasteById(caste);
        const _subCaste = await this.religionAndCasteService.getSubCasteById(subCaste);
        const formattedTodaysDate = this.dateTimeService.formatDate(new Date());
        let _shera: Shera | null = null;
        if (shera) {
            _shera = await this.sheraService.getSheraById(shera);
        }
        return {
            progressInStudy: _progressInStudy,
            behaviour: _behaviour,
            division: _division,
            birthDate: formattedBirthDate,
            birthDateInWords: birthDateInWords,
            dateOfAdmission: formattedDateofAdmission,
            schoolLeavingDate: formattedSchoolLeavingDate,
            religion: _religion,
            caste: _caste,
            subCaste: _subCaste,
            shera: _shera,
            todaysDate: formattedTodaysDate,
            ...birthPlace
        };
    };
    getBirthDateInWords = (date: Date): string => {
        const toWords = new ToWords({
            localeCode: 'mr-IN'
        });
        const momentDate = moment(date);
        const day = parseInt(momentDate.format('DD'));
        const month = parseInt(momentDate.format('MM'));
        const year = parseInt(momentDate.format('YYYY'));

        const dayInWord = toWords.convert(day);
        const monthInWord = monthsInMarathi[month];
        const yearInWord = toWords.convert(year);
        return `${dayInWord} ${monthInWord} ${yearInWord}`;
    };
}
