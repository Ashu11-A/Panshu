import express from 'express';
import { envLD } from '../../../functions/env.mjs'
const router = express.Router()

router.get('/application', (req, res) => {
    const valores = envLD()
    res.json({
        Website: {
            title: process.env.APP_TITLE,
            http: process.env.APP_URL,
            port: process.env.APP_PORT,
            mode: process.env.APP_MODE,
            version: process.env.APP_VERSION,
        }
    });
});

export default router