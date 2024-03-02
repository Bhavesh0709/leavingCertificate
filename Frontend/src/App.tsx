import React from 'react';
import { ToastProvider } from './Components/atoms/CustomToast';
import ExternalRouter from './Components/routes';

function App() {
    return (
        <ToastProvider>
            <ExternalRouter />
        </ToastProvider>
    );
}

export default App;
