import React from 'react'
import { Link } from 'react-router-dom';
import { INTERNAL_ROUTES, IRouteName } from './types';

function Dropdown(props: any) {
    const dropdownItems = props.dropdownItems;
    const name1 = props.name;
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                    href="#" id="navbarDropdown" role="button" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {name1}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {dropdownItems.map((component: IRouteName) => {
                        const name = INTERNAL_ROUTES[component as unknown as IRouteName].name;
                        const route = INTERNAL_ROUTES[component as unknown as IRouteName].route;
                        return (
                            <>
                                <Link to={route} className='dropdown-item'>
                                    {name}
                                </Link>
                            </>
                        )
                    })}
                                
                </div>
            </li>      
        </>
    )
}

export default Dropdown