import { PrismaUsersRepository } from "@/http/repositories/prisma/user/UserRepository";
import { UserAlreadyExistsError } from "@/utils/errors/user/UserAlreadyExistsError"
import { registerBodySchema } from "@/utils/schema/user/userBody";
import { FastifyReply, FastifyRequest } from "fastify"
import httpStatus from "http-status";

export const verifyUserWithSameEmailExists = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email } = registerBodySchema.parse(request.body);

    const usersRepository = new PrismaUsersRepository();

    const userWithSameEmail = await usersRepository.findByEmail(email)

    const error = new UserAlreadyExistsError();

    if (userWithSameEmail) {
        return reply.status(httpStatus.CONFLICT).send({message: error.message })
    }
}
