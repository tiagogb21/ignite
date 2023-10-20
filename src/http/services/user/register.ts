import { hash } from 'bcryptjs';

import { UsersRepository } from '@/http/repositories/UserRepository';
import { RegisterUseCaseRequest, RegisterUseCaseResponse } from '@/types/interface/IUser';

export class RegisterUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute({
        name,
        email,
        password,
    }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
        // o hash é uma forma de criar aleatoriamente senhas
        // ele cria aleatoriamente o password n vezes
        // NÃO pode ser um número alto, por que se for, vai pesar a aplicação
        // exceção: quando realmente necessitar
        const password_hash = await hash(password, 6);

        const user = await this.usersRepository.create({
            name,
            email,
            password_hash,
        })

        return {
            user,
        }
    }
}
