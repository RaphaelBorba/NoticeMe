import Joi from "joi";

export const followModel = Joi.object({
    user_followed: Joi.number().required()
})


