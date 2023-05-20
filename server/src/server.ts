/* eslint-disable prettier/prettier */
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

// HTTP METHOD: GET, POST, PUT, PATCH, DELETE
// GET para listar alguma informação
// POST para criar alguma informação
// PUT para atualizar alguma informação
// PATCH para atualizar alguma informação especifica.
// DELETE deletar alguma informação.

// API RESTFUL
app.register(memoriesRoutes)
app.register(cors, {
  origin: true, // todas as URL's de front-end poderão acessar o nosso backend
})

app
  .listen({
    // eslint-disable-next-line prettier/prettier
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
