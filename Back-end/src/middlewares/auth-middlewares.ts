import { NextFunction, Request, Response } from "express";
import { getUserByEmail } from "../repositories/auth-repositories";


export async function validateSignInBody(req: Request, res: Response, next: NextFunction) {

    const { body } = req

    const user = await getUserByEmail(body.email)

    if (!user) return res.sendStatus(404)
    
    res.locals.user = user

    next()
}

export async function validateSignUpBody(req: Request, res: Response, next: NextFunction) {

    const { body } = req

    const existEmail = await getUserByEmail(body.email)

    if(existEmail) return res.sendStatus(409)

    next()
}