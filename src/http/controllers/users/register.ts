import { FastifyReply, FastifyRequest } from "fastify";
import httpStatus from "http-status";

import { registerBodySchema } from "@/utils/schema/user/userBody";
import { RegisterUseCase } from "@/http/services/user/register";
import { PrismaUsersRepository } from "@/http/repositories/prisma/user/UserRepository";

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = registerBodySchema.parse(request.body);

    const registerUseCase = new RegisterUseCase(new PrismaUsersRepository());

    await registerUseCase.execute({ name, email, password });

    return reply.status(httpStatus.CREATED).send();
}
