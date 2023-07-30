/**
 * Apenas uma extenção da aplicação, nessa base possue dois sistemas,
 * React e Express, ambos em Module Javascript "mjs" é a msm coisa que "js",
 * Apenas lintando para ficar mais facil de reconhecer.
 */

/**
 * ativa o uso do .env na aplicação.
 */
import dotenv from 'dotenv';
import { dev } from './app/init/dev.mjs';
dotenv.config();

if(process.env.APP_MODE !== "production") {
    dev()
} else {
    import('./app/express.mjs')
}
