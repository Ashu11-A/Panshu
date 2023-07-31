import express from 'express';
const router = express.Router()
import axios from 'axios'

router.get('/bandwidth', async (req, res) => {
    console.log('Alguem acessou o bandwidth')
    try {
        const bandwidth = await axios({
          url: 'http://node.seventyhost.net:24008'
        })
        res.json({
            ...bandwidth.data
        });
    } catch {
        res.json({
            Error: "Houve um erro na requisição da API"
        })
    }
});

export default router