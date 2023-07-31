import path from "path";
import express from 'express';
import { fileURLToPath } from "url";
import ViteExpress from "vite-express";
import ApplicationRoute from './http/routers/api/application.mjs'
import backupAPI from './http/routers/api/backupAPI.mjs'
import bandwidth from './http/routers/api/bandwidth.mjs'
const app = express();

/**
 * Mundialmente usado no js padrão, no mjs é necessario o uso
 * das const abaixo para que funcionem corretamente.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações do express e middlewares
app.use(express.json()); // Equivalente ao bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Equivalente ao bodyParser.urlencoded({ extended: true })

app.use('/api', ApplicationRoute)
app.use('/api', backupAPI)
app.use('/api', bandwidth)

if (process.env.APP_MODE !== "production") {
    console.log('Aplicação em modo de desenvolvimento, iniciando...')
    // Aviso amigavel, não mode o "0.0.0.0", se mudar quebra
    const server = app.listen(process.env.APP_PORT, "0.0.0.0", () =>
        console.log(`Servidor iniciado em ${process.env.APP_URL}:${process.env.APP_PORT}.`)
    );
    ViteExpress.bind(app, server);
    console.log(`Vite iniciado com sucesso.`)
} else {
    console.log('O Servidor esta inciando...')
    const buildPath = path.join(__dirname, './http/public');
    app.use(express.static(buildPath));

    // Rota para lidar com todas as outras requisições e redirecionar para o React buildado
    app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });

    app.listen(process.env.APP_PORT, "0.0.0.0", () => {
        console.log('Servidor rodando na porta 3000');
    });
}