import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";

const app = Fastify()

/*access permitions - app.register(cors, {
    origin: ['http://localhost:3000']
}) */
app.register(cors) 
app.register(appRoutes)

app.listen({
    port: 3333,
    host: "0.0.0.0",
}) .then((url) => {
console.log(`HTTP Server running! ${url}`)
})