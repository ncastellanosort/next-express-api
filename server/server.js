import express from 'express'
import cors from 'cors'

import { readJSON } from './utils/read-json.js'

const usuarios = readJSON('./data/users.json')
const movies = readJSON('./data/movies.json')


const app = express()

const PORT = 1234

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
  return res.json(usuarios)
})

app.get('/movies', (req, res) => {
  return res.json(movies)
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})