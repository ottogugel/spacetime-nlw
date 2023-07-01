/* eslint-disable prettier/prettier */

import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt';

const app = fastify()

// HTTP METHOD: GET, POST, PUT, PATCH, DELETE
// GET para listar alguma informação
// POST para criar alguma informação
// PUT para atualizar alguma informação
// PATCH para atualizar alguma informação especifica.
// DELETE deletar alguma informação.

// API RESTFUL
app.register(memoriesRoutes)
app.register(authRoutes)
app.register(cors, {
  origin: true, // todas as URL's de front-end poderão acessar o nosso backend
})
app.register(jwt, {
  secret: 'vbvkhlckmdexr21365bv', // diferenciar os tokens gerados pelo back-end (criptografia do token)
})

app
  .listen({
    // eslint-disable-next-line prettier/prettier
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333/')
  })
