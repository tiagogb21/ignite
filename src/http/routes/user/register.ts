import { register } from "@/http/controllers/user/register";
import { verifyUserWithSameEmailExists } from "@/http/middlewares/user/verifyUserWithSameEmailExists";
import { FastifyInstance } from "fastify";

export async function userRoutes(app: FastifyInstance) {
    app.post('/users', { preHandler: verifyUserWithSameEmailExists },  register)
}
