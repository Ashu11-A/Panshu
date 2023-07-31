import express from 'express';
const router = express.Router()
import axios from 'axios'

router.get('/backupAPI', async (req, res) => {
    console.log('Alguem acessou o backupAPI')
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