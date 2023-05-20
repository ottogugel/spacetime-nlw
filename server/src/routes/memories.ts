import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/memories", async () => {
    const memories = await prisma.memory.findMany({
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

  app.get("/memories/:id", async (request) => {
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
    });

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
        userId: "38fd5a85-1476-4a6a-ac46-10b02eb8c079",
      },
    });
  }); // Criação da Memória

  app.put("/memories/:id", async (request) => {
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

    const memory = await prisma.memory.update({
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

  app.delete("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      // estrutura do dado
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const memory = await prisma.memory.delete({
      where: {
        id,
      },
    });

    return memory;
  }); // Deletar a Memória
}

// findMany - consulta todas as informações
