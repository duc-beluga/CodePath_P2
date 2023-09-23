import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'
import champData from '../data/champs.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(champData)
})

router.get('/:champId', (req, res) => {
  console.log('yea')
  res.status(200).sendFile(path.resolve(__dirname, '../../client/public/champ.html'))

})


  export default router