import express from 'express'
import path from 'path'
import ChampsController from '../controllers/gifts.js'
import { fileURLToPath } from 'url'
import champData from '../data/champs.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', ChampsController.getChamps)

router.get('/:champId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/champ.html'))

})



  export default router