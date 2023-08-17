import prisma from "../data/db";


function getFollowDB(user_followed: number, user_following:number){

    return prisma.follows.findFirst({
        where:{
            AND:[
                {user_followed},
                {user_following}
            ]
        }
    })
}

function createFollowDB(user_followed: number, user_following:number){

    return prisma.follows.create({
        data:{
            user_followed,
            user_following
        }
    })
}

function deleteFollowDb(id: number){

    return prisma.follows.delete({
        where:{
            id
        }
    })
}

const followRepositories = {
    getFollowDB,
    createFollowDB,
    deleteFollowDb
}

export default followRepositories