import { EditUserBody } from "protocols";
import prisma from "../data/db";



function getUserByIdDB(id: number) {

    return prisma.users.findFirst({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            birthday: true,
            image_url: true,
            posts: true,
            description: {
                select:{
                    text:true
                }
            }
        }
    })
}
function updateUserDataDB(body: EditUserBody, id: number) {

    return prisma.users.update({
        where: {
            id
        },
        data: {
            name: body.name,
            birthday: body.birthday,
            image_url: body.image_url

        }
    })
}

async function createOrUpdateDescriptonDB(description: string, user_id: number) {

    const Existdescription = await prisma.description.findFirst({ where:{user_id}})

    if(Existdescription){

        await prisma.description.delete({where:{id:Existdescription.id}})
    }
    return prisma.description.create({
        data:{
            text:description,
            user_id
        }
    })

}

const userRepositories = {
    getUserByIdDB,
    updateUserDataDB,
    createOrUpdateDescriptonDB
}

export default userRepositories
