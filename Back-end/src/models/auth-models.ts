import Joi from "joi";

const signInModel = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const signUpModel = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    birthday: Joi.string().required(),
    image_url: Joi.string().required()
})

const authModel ={
    signInModel,
    signUpModel
}

export default authModel