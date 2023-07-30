import express from 'express';
const router = express.Router()
import axios from 'axios'

router.get('/backup', async (req, res) => {
    try {
        const backupInfo = await axios({
          url: 'http://node.seventyhost.net:25015/backup-size'
        })
        res.json({
            ...backupInfo.data
        });
    } catch {
        res.json({
            Error: "Houve um erro na requisição da API"
        })
    }
});

export default router