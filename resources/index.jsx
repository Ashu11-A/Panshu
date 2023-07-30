import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './scripts/App';
import ErrorBoundary from './scripts/webpages/errors/ErrorBoundary'
/**
 * Use react.StrictMode para poder ver erros do react, em modo produção remova-o., 
 * use o ErrorBoundary para erros 500
 */
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <React.StrictMode>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </React.StrictMode>,
    </>
)
