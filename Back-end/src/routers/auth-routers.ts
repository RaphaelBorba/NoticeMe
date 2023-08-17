import { signIn, signUp } from "../controllers/auth-controllers";
import { Router } from "express";
import { validateSignInBody, validateSignUpBody } from "../middlewares/auth-middlewares";
import validateModel from "../middlewares/validateModels-middleware";
import authModel from "../models/auth-models";

const authRouters = Router()

authRouters
    .post("/signIn",validateModel(authModel.signInModel), validateSignInBody, signIn)
    .post("/signUp",validateModel(authModel.signUpModel), validateSignUpBody, signUp)


export {authRouters}