import prisma from "../data/db";

type PostBody = {
    title: string,
    text: string,
    image_url: string | null,
    user_id: number
}

export function postPostDB(body: PostBody) {

    return prisma.posts.create({
        data: {
            title: body.title,
            text: body.text,
            user_id: body.user_id,
            image_url: body.image_url ? body.image_url : ''
        }
    })
}

export function getPostByIdWithCommentsDB(postId: number) {

    return prisma.posts.findFirst({
        where: { id: postId },
        include:{
            
            comments:true
        }
    })

}

export function getPostsForHomeDB(){

    return prisma.posts.findMany({
        take:15,
        include:{
            _count:true,
            users:{
                select:{
                    name:true,
                    image_url:true,
                    id:true
                }
            }
            

        },
        orderBy:{
            create_at:'desc'
        }
    })
}

export function deletePostDB(postId:number){

    return prisma.posts.delete({
        where:{
            id:postId
        }
    })
}