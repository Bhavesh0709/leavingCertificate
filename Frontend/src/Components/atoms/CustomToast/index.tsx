import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
type IToastType = 'success' | 'danger' | 'warning';

interface IToastState {
    show: boolean;
    type: IToastType;
    title: string;
    body: string;
}

interface IToastContext {
    displayToast: (type: IToastType, title: string, body: string, expires?: number | null) => void;
}
const ToastContext = createContext<IToastContext | undefined>(undefined);
const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toastState, setToastState] = useState<IToastState>({
        show: false,
        type: 'success',
        title: '',
        body: ''
    });

    const displayToast = (type: IToastType, title: string, body: string, expires?: number | null) => {
        setToastState({
            show: true,
            type,
            title,
            body
        });

        if (expires) {
            setTimeout(() => {
                hideToast();
            }, expires);
        }
    };
    const hideToast = () => {
        setToastState({
            ...toastState,
            show: false
        });
    };
    return (
        <ToastContext.Provider value={{ displayToast }}>
            {children}
            <ToastContainer position="bottom-end">
                <Toast
                    show={toastState.show}
                    onClose={hideToast}
                    delay={5000}
                    autohide
                    className="m-5"
                    bg={toastState.type}
                >
                    <Toast.Header closeButton={false} className={`${toastState.type}`}>
                        <strong className="me-auto">{toastState.title}</strong>
                        <button type="button" className="btn-close" onClick={hideToast}></button>
                    </Toast.Header>
                    <Toast.Body className={`${toastState.type} text-white`}>{toastState.body}</Toast.Body>
                </Toast>
            </ToastContainer>
        </ToastContext.Provider>
    );
};

const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
export { ToastProvider, useToast };
