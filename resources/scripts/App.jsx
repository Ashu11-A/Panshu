import React, { useEffect, useState } from 'react';
import { jsonViewer } from './utils/jsonViewer.jsx';
import ContentBox from './utils/ContentBox.jsx';
import Loading from './utils/Loading.jsx';

const App = () => {
    const [Website, setWebsite] = useState(null); // Estado para armazenar as informações do JSON

    useEffect(() => {
        (async function () {
            // const response = await fetch(`/api/application`);
            const response = await fetch(`/api/backup`);
            const { Website } = await response.json();
            /**
             * Armazena as informações na window.
             */
            window.Website = Website
            setWebsite(window.Website)
            /**
             * Atualiza o titulo da aplicação.
             */
            document.title = (window?.Website?.title ?? 'Olá') + ' - Bem Vindo';
        })();
    }, []);
    // Declara uma variável de estado "count" e seu método de atualização "setCount"
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
    const removeCount = () => {
        setCount(count - 1);
    };



    // Primeiro item do return do react tem que ser ou div ou </>, se não vai dar erro.
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                {!Website ? (
                    <Loading />
                ) : (
                    <>
                        <ContentBox>
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
                            <p>Seu Config Atual</p>
                            <pre className="text-left bg-gray-100 p-4 rounded-md overflow-auto max-h-96">
                                <code className="text-sm text-gray-800">
                                    {/* jsonViewer(Website) */}
                                </code>
                            </pre>
                            <div className='flex justify-center items-center'>
                                <button onClick={incrementCount} className="bg-green-400 h-[20px] w-[20px] m-3 rounded-2xl">+</button>
                                    {count}
                                <button onClick={removeCount} className="bg-red-500 h-[20px] w-[20px] m-3 rounded-2xl">-</button>
                            </div>
                        </ContentBox>
                    </>
                )}
            </div>
        </>
    );
}

export default App;