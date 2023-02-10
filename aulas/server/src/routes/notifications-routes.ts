// import WebPush from 'web-push'
// import { FastifyInstance } from 'fastify'

// const publicKey = 'BIrdI7fAJRMDADJVoS04WZ8n9yh0ppK-KZXPq29ZdiDBKHhANa4ib67LYtYUs0wAFg6os36crbERvJrS29Wyabg'
// const privateKey = 'poCm85E4CrgyAMBHwf27edXEvvgBlXcOQ3bL_yGAv_E'

// WebPush.setVapidDetails( 'http:/localhost:3003', publicKey, privateKey)


// export async function notificationRoutes(app: FastifyInstance) {
  
//   app.get('/push/public_key', () => {
//     return {
//       publicKey
//     }
//   })

//   app.post('/push/register', (request, reply) => {
//     console.log(request.body)

//     return reply.status(201).send()
//   })

//   app.post('/push/send', async (request, reply) => {
//     console.log(request.body)

//     return reply.status(201).send()
//   })
// }