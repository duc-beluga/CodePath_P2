import express from 'express'
import './config/dotenv.js';
import champsRouter from './routes/champs.js'
import cors from 'cors'
import path from 'path';

const app = express()

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// app.use('/public', express.static(path.resolve(__dirname, '../client/public')));
app.use(cors());
app.use('/public', express.static(path.resolve(__dirname, '../client/public')))
app.use('/scripts', express.static(path.resolve(__dirname, '../client/public/scripts')))
app.use(express.static(path.resolve(__dirname, '../client')));
app.use('/champs', champsRouter)

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">LOL API</h1>')
})

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '../client/public/404.html'));
});

  const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})