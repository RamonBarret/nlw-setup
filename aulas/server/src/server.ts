import Fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

/*access permitions - app.register(cors, {
    origin: ['http://localhost:3000']
}) */
app.register(cors) 

/* 
   * Método HTTP: Get, Post, Put, Patch, Delete
*/

app.get('/', async () => {
    const habits = await prisma.habit.findMany()
    return habits
})

app.listen({
    port: 3333,
}) .then(() => {
    console.log('HTTP Server running!')
})