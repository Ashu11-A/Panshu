import express from 'express';

const router = express.Router()

router.get('/application', (req, res) => {
    res.json({
        Website: {
            title: process.env.APP_TITLE,
        }
    });
});

export default router