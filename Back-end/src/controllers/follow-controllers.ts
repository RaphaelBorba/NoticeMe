import { Request, Response } from "express";
import userRepositories from "../repositories/user-repositories";
import followRepositories from "../repositories/follow-repositories";




export async function followOrUnfollow(req:Request, res:Response){

    const {user_followed} = req.body
    const {userId} = res.locals

    if(user_followed === userId) return res.sendStatus(409)

    try {
        
        const existUser = await userRepositories.getUserByIdDB(user_followed)
        
        if(!existUser) return res.sendStatus(404)

        const existFollow = await followRepositories.getFollowDB(user_followed, userId)

        if(existFollow){

            await followRepositories.deleteFollowDb(existFollow.id)
            return res.sendStatus(200)

        }else{

            await followRepositories.createFollowDB(user_followed, userId)
            res.sendStatus(200)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}