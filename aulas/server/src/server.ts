import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { habitEvery } from './routes/habitEvery'
import { habitDay } from './routes/habitDay'
import { habitSummary } from './routes/habitSummary'
import { habitToggle } from './routes/habitToggle'

import { authRoutes } from './routes/auth'
import { userRoutes } from './routes/user'

async function bootstrap() {
    const app = Fastify()
  
    await app.register(cors
      // origin: ['http:localhost:3003']
    )
    
    await app.register(jwt, {
      secret: 'ioioioioiooioioioioi',
    })
  
  
    await app.register(habitEvery)
    await app.register(habitDay)
    await app.register(habitSummary)
    await app.register(habitToggle)
    await app.register(authRoutes)
    await app.register(userRoutes)
    // await app.register(notificationRoutes)

    app.listen({
        port: 3333,
        host: "0.0.0.0",
    }) .then((url) => {
    console.log(`HTTP Server running! ${url}`)
    })
  }
  
  bootstrap();