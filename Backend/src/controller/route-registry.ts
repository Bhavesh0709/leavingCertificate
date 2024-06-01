import { BirthDetailsController } from './BirthDetails';
import { ComplimentController } from './Compliment';
import { DivisionController } from './Division';
import { GeneratePDF } from './GeneratePDF';
import { MasterDBController } from './Master';
import { ReligionAndCasteController } from './ReligionAndCaste';
import { SheraController } from './Shera';
import { HTTPMethod, Route } from './routes';

export class RouteRegistry {
    getBirthDetailsRouteDefinitions(): Route[] {
        const birthDetailsController = new BirthDetailsController();
        return [
            {
                fullPath: '/getBirthInfo',
                method: HTTPMethod.GET,
                controllerFunction: birthDetailsController.getBirthInfo.bind(birthDetailsController)
            },
            {
                fullPath: '/addBirthInfo',
                method: HTTPMethod.POST,
                controllerFunction: birthDetailsController.addBirthInfo.bind(birthDetailsController)
            }
        ];
    }
    getComplimentRouteDefinitions(): Route[] {
        const complimentController = new ComplimentController();
        return [
            {
                fullPath: '/addCompliment',
                method: HTTPMethod.POST,
                controllerFunction: complimentController.addCompliment.bind(complimentController)
            },
            {
                fullPath: '/getCompliment',
                method: HTTPMethod.GET,
                controllerFunction: complimentController.getCompliment.bind(complimentController)
            }
        ];
    }
    getDivisionRouteDefinitions(): Route[] {
        const divisionController = new DivisionController();
        return [
            {
                fullPath: '/addDivision',
                method: HTTPMethod.POST,
                controllerFunction: divisionController.addDivision.bind(divisionController)
            },
            {
                fullPath: '/getDivisions',
                method: HTTPMethod.GET,
                controllerFunction: divisionController.getDivisions.bind(divisionController)
            }
        ];
    }
    getSheraRouteDefinitions(): Route[] {
        const sheraController = new SheraController();
        return [
            {
                fullPath: '/addShera',
                method: HTTPMethod.POST,
                controllerFunction: sheraController.addShera.bind(sheraController)
            },
            {
                fullPath: '/getSheras',
                method: HTTPMethod.GET,
                controllerFunction: sheraController.getSheras.bind(sheraController)
            }
        ];
    }
    getReligionAndCasteControllerRouteDefinitions(): Route[] {
        const religionAndCasteController = new ReligionAndCasteController();
        return [
            {
                fullPath: '/addReligionAndCastes',
                method: HTTPMethod.POST,
                controllerFunction: religionAndCasteController.addReligionAndCastes.bind(religionAndCasteController)
            },
            {
                fullPath: '/getAllReligionAndCastes',
                method: HTTPMethod.GET,
                controllerFunction: religionAndCasteController.getAllReligionAndCastes.bind(religionAndCasteController)
            }
        ];
    }
    getMasterRouteDefinitions(): Route[] {
        const masterDBController = new MasterDBController();
        return [
            {
                fullPath: '/addUserDetails',
                method: HTTPMethod.POST,
                controllerFunction: masterDBController.addUserDetails.bind(masterDBController)
            },
            {
                fullPath: '/getUserDetails/:aadharNo',
                method: HTTPMethod.GET,
                controllerFunction: masterDBController.getUserDetails.bind(masterDBController)
            },
            {
                fullPath: '/getAllUsers',
                method: HTTPMethod.GET,
                controllerFunction: masterDBController.getAllUsers.bind(masterDBController)
            }
        ];
    }
    generatePDF(): Route[] {
        const generatePDF = new GeneratePDF();
        return [
            {
                fullPath: '/generatePDF/:aadharNo',
                method: HTTPMethod.GET,
                controllerFunction: generatePDF.generate.bind(generatePDF)
            }
        ];
    }
}
