import prisma from "../data/db";

export function getUserByEmail(email: string) {

    return prisma.users.findFirst({
        where: { email }
    })
}

export function insertNewUserDB(name: string, email: string, birthday: Date, password: string, image_url:string) {
    return prisma.users.create({
        data: {
            name, email, birthday, password, image_url
        }
    })
}