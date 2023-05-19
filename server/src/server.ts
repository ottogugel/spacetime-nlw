/* eslint-disable prettier/prettier */
import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP METHOD: GET, POST, PUT, PATCH, DELETE
// GET para listar alguma informação
// POST para criar alguma informação
// PUT para atualizar alguma informação
// PATCH para atualizar alguma informação especifica.
// DELETE deletar alguma informação.

app.get('/users', async () => {
  const users = await prisma.user.findMany() // Consultar todos os usuários cadastrados.
  return users
})

// API RESTFUL

app
  .listen({
    // eslint-disable-next-line prettier/prettier
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
