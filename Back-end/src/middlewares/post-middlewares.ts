import { NextFunction, Request, Response } from "express";

export async function validatePostBody(req:Request,res:Response,next:NextFunction){

    const {body} = req

    if(body.user_id !== res.locals.userId) return res.sendStatus(409)

    next()
}