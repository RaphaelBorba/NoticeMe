import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { insertNewUserDB } from "../repositories/auth-repositories";
import authServices from "../services/auth-services";



export async function signIn(req: Request, res: Response) {

    const { user } = res.locals
    const { body } = req

    if (!authServices.validateHashPassword(body.password, user.password)) return res.sendStatus(400)

    const token = jwt.sign({ userId: user.id, userName: user.name }, process.env.SECRET_JWT)

    res.status(200).send({ token, userId: user.id, userName: user.name })
}

export async function signUp(req: Request, res: Response) {

    const { body } = req

    const hashPassword = authServices.createHashPassword(body.password)

    const birthday = authServices.transformStringIntoDate(body.birthday)

    try {

        await insertNewUserDB(body.name, body.email, birthday, hashPassword, body.image_url)

        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}