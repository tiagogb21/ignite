import { User } from '@prisma/client';

export interface RegisterUseCaseRequest {
    name: string
    email: string
    password: string
}

export interface RegisterUseCaseResponse {
    user: User
}