import React from "react";
import AddBirthPlace from "../AddExtra/AddBirthPlace";
import AddCompliment from "../AddExtra/AddCompliment";
import AddDivision from "../AddExtra/AddDivision";
import Form from "../Form/Form";

export type CompanyName = 'MVM';

export type IRouteName =
    | 'Create'
    | 'AddExtras'
    | 'AddBirthPlace'
    | 'AddDivision'
    | 'AddCompliment'

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
        dropdownComponents: ['AddBirthPlace', 'AddDivision', 'AddCompliment']
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
    }
}
