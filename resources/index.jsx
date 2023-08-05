import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import 'boxicons/css/boxicons.min.css'

import ErrorBoundary from './scripts/pages/errors/ErrorBoundary'
import AppLayout from './scripts/components/layout/AppLayout';
import Main from './scripts/pages/Main';
import Analytics from './scripts/pages/Analytics';
import None from './scripts/pages/None';
/**
 * Use react.StrictMode para poder ver erros do react, em modo produção remova-o., 
 * use o ErrorBoundary para erros 500
 */

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <React.StrictMode>
            <ErrorBoundary errCode={'500'}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<AppLayout/>}>
                            <Route index element={<Main/>}/>
                            <Route path='/analytics' element={<Analytics/>}/>
                            <Route path='/contributors' element={<None/>}/>
                            <Route path='/user' element={<None/>}/>
                            <Route path='/order' element={<None/>}/>
                            <Route path="*" element={<ErrorBoundary errCode={'404'}/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ErrorBoundary>
        </React.StrictMode>
    </>
)