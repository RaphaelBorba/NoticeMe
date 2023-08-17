import { Request, Response } from "express";
import userRepositories from "../repositories/user-repositories";


export async function getUserById(req: Request, res: Response) {

    const { id } = req.params

    try {
        const user = await userRepositories.getUserByIdDB(Number(id))

        res.status(200).send(user)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function updateUserData(req: Request, res: Response){

    const {userId} = res.locals
    try {

        await userRepositories.updateUserDataDB(req.body, userId)

        res.sendStatus(201)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}

export async function createDescription(req: Request, res: Response){

    const {description} = req.body
    const {userId} = res.locals

    try {

        await userRepositories.createOrUpdateDescriptonDB(description, userId)

        res.sendStatus(201)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}