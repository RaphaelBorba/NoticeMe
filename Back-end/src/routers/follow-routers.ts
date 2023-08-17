import { followOrUnfollow } from "../controllers/follow-controllers";
import { Router } from "express";
import validateModel from "../middlewares/validateModels-middleware";
import { authenticateToken } from "../middlewares/validateToken-middleware";
import { followModel } from "../models/follow-model";

const followRouters = Router()

followRouters.
    post('',authenticateToken, validateModel(followModel), followOrUnfollow)


export {followRouters}