import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function memoriesRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify() // Verifica na requisição para essa rota vir o token, se o token não vier vai ser bloqueado.
  })

  app.get("/memories", async (request) => {
    const memories = await prisma.memory.findMany({
      where: {
        userId: request.user.sub, // Id do usuário
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat("..."),
      };
    });
  }); // Listagem de todas as memórias

  app.get("/memories/:id", async (request, reply) => {
    // const { id } = request.params;

    const paramsSchema = z.object({
      // estrutura do dado
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (!memory.isPublic && memory.userId !== request.user.sub) {
      return reply.status(401).send()
    }

    // Se a memoria não for publica e o id de quem criou a memoria foi diferente do usuario logado retorna o 401.

    return memory;
  }); // Detalhes de cada memória

  app.post("/memories", async (request) => {
    const bodySchema = z.object({
      // estrutura do dado
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.boolean().default(false),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

    await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: request.user.sub,
      },
    });
  }); // Criação da Memória

  app.put("/memories/:id", async (request, reply) => {
    const paramsSchema = z.object({
      // estrutura do dado
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      // estrutura do dado
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.boolean().default(false),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

    let memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      }
    })

    if(memory?.userId !== request.user.sub) {
      return reply.status(401).send()
    }
    // Se o id da pessoa que criou a memoria for diferente do usuario logado retornar o reply para 401 - não autorizado.
    // ! ==

    memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    });

    return memory;
  }); // Atualização da Memória

  app.delete("/memories/:id", async (request, reply) => {
    const paramsSchema = z.object({
      // estrutura do dado
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      }
    })

    if(memory?.userId !== request.user.sub) {
      return reply.status(401).send()
    }
    // Se o id da pessoa que criou a memoria for diferente do usuario logado retornar o reply para 401 - não autorizado.

    await prisma.memory.delete({
      where: {
        id,
      },
    });

    return memory;
  }); // Deletar a Memória
}

// findMany - consulta todas as informações
