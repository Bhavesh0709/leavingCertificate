import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './Form/Form'
import Navbar from './Navbar/Navbar'
import { INTERNAL_ROUTES, IRouteName,CompanyName  } from './Navbar/types'
const ExternalRouter = () => {
    const brandName: CompanyName = 'MVM';
    return (
        <>
            <Navbar brandName={brandName}/>
            <Routes>
                <Route path='/' element={<Form />} />
                {Object.keys(INTERNAL_ROUTES).map((internalRoute, index) => {
                    const Page = INTERNAL_ROUTES[internalRoute as unknown as IRouteName].Component;
                    return (
                        <Route
                            key={index}
                            path={INTERNAL_ROUTES[internalRoute as unknown as IRouteName].route}
                            element={<Page />}
                        />
                    );
                })}
                <Route path='/*' element={<h1> Page Not found</h1>} />
            </Routes>
        </>
    )
}


export default ExternalRouter