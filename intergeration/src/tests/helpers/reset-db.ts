import { prismaClient } from "../../db";

export function resetDb() {
    return prismaClient.$transaction([
        prismaClient.request.deleteMany({})
    ])
}