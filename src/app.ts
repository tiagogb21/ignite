import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { userRoutes } from "./http/routes";

export const app = fastify();

const prisma = new PrismaClient();

app.register(userRoutes)
