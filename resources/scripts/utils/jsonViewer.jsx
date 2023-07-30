const jsonViewer = (jsonObject, level = 0) => {
    return Object.entries(jsonObject).map(([key, value], index) => (
        <div key={index} style={{ marginLeft: level * 20 }}>
            <span className={`text-blue-700 ${level > 0 ? 'ml-2' : ''}`}>{`"${key}":`}</span>
            {jsonMaker(value, level)}
            {index < Object.keys(jsonObject).length - 1 ? <span>, </span> : null}
        </div>
    ));
};

// Função para tratar os diferentes valores do JSON
const jsonMaker = (value, level) => {
    if (value === null) {
        return <span className="text-red-500">null</span>;
    } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return (
                <>
                    <span className="text-yellow-500">[</span>
                    {jsonViewer(value, level + 1)}
                    <span className="text-yellow-500">]</span>
                </>
            );
        } else {
            return (
                <>
                    <span className="text-blue-700">{`{`}</span>
                    {jsonViewer(value, level + 1)}
                    <span className="text-blue-700">{`}`}</span>
                </>
            );
        }
    } else if (typeof value === 'string') {
        return <span className="text-green-500">{`"${value}"`}</span>;
    } else if (typeof value === 'boolean') {
        return <span className="text-indigo-500">{value ? 'true' : 'false'}</span>;
    } else if (typeof value === 'number') {
        return <span className="text-purple-500">{value}</span>;
    } else {
        // Caso não seja um dos tipos tratados acima, exibimos o valor como string
        return <span className="text-orange-500">{JSON.stringify(value)}</span>;
    }
};

export { jsonViewer }