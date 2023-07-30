import React, { useEffect } from 'react';
const App = () => {
    useEffect(() => {
        // Define o novo título da página
        const { Website } = window
        document.title = Website.title + ' - Bem Vindo';
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
                </div>
            </div>
        </>
    );
};

export default App;