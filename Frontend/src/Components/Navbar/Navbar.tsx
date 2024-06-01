import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { CompanyName, INTERNAL_ROUTES, IRouteName } from './types';

interface NavbarProps {
    brandName: CompanyName;
}

function Navbar(props: NavbarProps) {
    const { brandName } = props;
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        {brandName}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-2" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {Object.keys(INTERNAL_ROUTES).map((internalRoute, index) => {
                                const name = INTERNAL_ROUTES[internalRoute as unknown as IRouteName].name;
                                const route = INTERNAL_ROUTES[internalRoute as unknown as IRouteName].route;
                                const dropdownItems =
                                    INTERNAL_ROUTES[internalRoute as unknown as IRouteName].dropdownComponents;
                                const isDropdownContent =
                                    INTERNAL_ROUTES[internalRoute as unknown as IRouteName].isDropDownContent;
                                return (
                                    <li key={index}>
                                        {dropdownItems ? (
                                            <Dropdown dropdownHeader={name} dropdownItems={dropdownItems} />
                                        ) : (
                                            !isDropdownContent && (
                                                <Link to={route} className="nav-link">
                                                    {name}
                                                </Link>
                                            )
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
