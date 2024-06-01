import React from 'react';
import AddBirthPlace from '../AddExtra/AddBirthPlace';
import AddCompliment from '../AddExtra/AddCompliment';
import AddDivision from '../AddExtra/AddDivision';
import Form from '../Form/Form';
import Dashboard from '../Dashboard';
import AddReligionAndCastes from '../AddExtra/AddReligionAndCastes';
import AddShera from '../AddExtra/AddShera';

export type CompanyName = 'MVM';

export type IRouteName =
    | 'Create'
    | 'AddExtras'
    | 'AddBirthPlace'
    | 'AddDivision'
    | 'AddCompliment'
    | 'Dashboard'
    | 'AddReligionAndCastes'
    | 'AddShera';

export const INTERNAL_ROUTES: Record<
    IRouteName,
    {
        route: string;
        name: string;
        Component: React.FunctionComponent;
        isVisible: boolean;
        isDropDownContent: boolean;
        dropdownComponents?: IRouteName[];
    }
> = {
    Create: {
        route: 'create',
        name: 'Create',
        Component: Form,
        isVisible: true,
        isDropDownContent: false
    },
    AddExtras: {
        route: 'add-extras',
        name: 'Add Extras',
        Component: AddBirthPlace,
        isVisible: true,
        isDropDownContent: false,
        dropdownComponents: ['AddBirthPlace', 'AddDivision', 'AddCompliment', 'AddReligionAndCastes', 'AddShera']
    },
    AddBirthPlace: {
        route: 'addBirthPlace',
        name: 'Add BirthPlace',
        Component: AddBirthPlace,
        isVisible: false,
        isDropDownContent: true
    },
    AddDivision: {
        route: 'addDivison',
        name: 'Add Divison',
        Component: AddDivision,
        isVisible: false,
        isDropDownContent: true
    },
    AddCompliment: {
        route: 'addCompliment',
        name: 'Add Compliment',
        Component: AddCompliment,
        isVisible: false,
        isDropDownContent: true
    },
    Dashboard: {
        route: 'Dashboard',
        name: 'Dashboard',
        Component: Dashboard,
        isVisible: true,
        isDropDownContent: false
    },
    AddReligionAndCastes: {
        route: 'addReligionAndCastes',
        name: 'Add Religion and Castes',
        Component: AddReligionAndCastes,
        isVisible: false,
        isDropDownContent: true
    },
    AddShera: {
        route: 'addShera',
        name: 'Add Shera',
        Component: AddShera,
        isVisible: false,
        isDropDownContent: true
    }
};
