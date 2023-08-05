import React, { useEffect, useState } from 'react';
import { jsonViewer } from './utils/jsonViewer';
import ContentBox from './components/ContentBox';
import Loading from './components/Loading';
import LineChart from './components/lineChart'

const App = () => {
    const [website, setWebsite] = useState(null); // Estado para armazenar as informações do JSON

    useEffect(() => {
        const fetchData = async () =>{
            const [env, backup, bandwidth] = await Promise.all([
                fetch(`/api/application`).then((res1) => res1.json()),
                fetch(`/api/backupAPI`).then((res2) => res2.json()),
                fetch(`/api/bandwidth`).then((res3) => res3.json())
            ]);

            /**
             * Armazena as informações em website.
             */
            const websiteData = {
                ...env,
                ...backup,
                ...bandwidth
            };

            setWebsite(websiteData);

            /**
             * Atualiza o título da aplicação.
             */
            document.title = (websiteData?.Env?.title ?? 'Olá') + ' - Bem Vindo';
        };

        fetchData();

        setInterval(fetchData, 30000);
    }, []);

    // Declara uma variável de estado "count" e seu método de atualização "setCount"
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const removeCount = () => {
        setCount(count - 1);
    };

    // Primeiro item do return do React deve ser uma div ou um fragmento <></>.
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {!website ? (
                <Loading />
            ) : (
                <>
                    <div className='grid grid-cols-3'>
                        <ContentBox>
                            <LineChart
                                data={website.hourlyData}
                                title={'Dados Salvos'}
                                position={'time*dados'}
                                color={'type'}
                            />
                        </ContentBox>
                        <ContentBox>
                            <LineChart
                                data={website.backup.hourlyData}
                                title={'Backup Size'}
                                position={'time*size'}
                                color={'title'}
                            />
                        </ContentBox>
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
                                    {jsonViewer(website)}
                                </code>
                            </pre>
                            <div className='flex justify-center items-center'>
                                <button onClick={incrementCount} className="bg-green-400 h-[20px] w-[20px] m-3 rounded-2xl">+</button>
                                {count}
                                <button onClick={removeCount} className="bg-red-500 h-[20px] w-[20px] m-3 rounded-2xl">-</button>
                            </div>
                        </ContentBox>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
