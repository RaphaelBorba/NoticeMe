import { createDescription, getUserById, updateUserData } from "../controllers/users-controllers";
import { Router } from "express";
import { authenticateToken } from "../middlewares/validateToken-middleware";
import validateModel from "../middlewares/validateModels-middleware";
import userModels from "../models/user-models";

const userRouters = Router()

userRouters
    .get('/:id', authenticateToken, getUserById)
    .post('/edit', authenticateToken,validateModel(userModels.editUserModel), updateUserData)
    .post('/description', authenticateToken, validateModel(userModels.addOrEditDescripton), createDescription)


export { userRouters }