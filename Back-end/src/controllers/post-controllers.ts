import { Request, Response } from "express";
import { deletePostDB, getPostByIdWithCommentsDB, getPostsForHomeDB, postPostDB } from "../repositories/post-repositories";



export async function postPost(req:Request, res:Response){

    try {
        
        await postPostDB(req.body)

        res.sendStatus(201)
    
    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}

export async function getPostByIdWithComments(req: Request, res: Response){

    const postId = Number(req.params.postId)

    if(isNaN(postId)) return res.sendStatus(400)

    try {

        const post =  await getPostByIdWithCommentsDB(Number(postId))

        if(!post) return  res.sendStatus(404)

        res.status(200).send(post)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function getPostsForHome(req: Request, res: Response){

    try {

        const posts = await getPostsForHomeDB()

        res.status(200).send(posts)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function deletePost(req:Request, res:Response){

    const {postId} = req.params

    try {

        await deletePostDB(Number(postId))
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}