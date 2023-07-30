import React, { useEffect, useState } from 'react';
import { jsonViewer } from './utils/jsonViewer.jsx';

const App = () => {
    const [Website, setWebsite] = useState(null); // Estado para armazenar as informações do JSON

    useEffect(() => {
        (async function () {
            const response = await fetch(`/api/application`);
            const { Website } = await response.json();
            /**
             * Armazena as informações na window.
             */
            window.Website = Website
            setWebsite(window.Website)
            /**
             * Atualiza o titulo da aplicação.
             */
            document.title = window.Website.title + ' - Bem Vindo';
        })();
    }, []);

    // Primeiro item do return do react tem que ser ou div ou </>, se não vai dar erro.
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
                    <img
                        src='/vite.svg'
                        alt="Ícone do React"
                        className="w-16 h-16 mx-auto mb-4"
                    />
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">
                        Bem Vindo ao Começo da dor de cabeça chamado React :3
                    </h1>
                    <p className="text-gray-600 mb-6">
                        É aqui que tudo começa.
                    </p>
                    {!Website ? (
                        <p>Loading</p>
                    ) : (
                        <>
                            <p>Seu Config Atual</p>
                            <pre className="text-left bg-gray-100 p-4 rounded-md overflow-auto max-h-96">
                                <code className="text-sm text-gray-800">
                                    {jsonViewer(Website)}
                                </code>
                            </pre>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default App;