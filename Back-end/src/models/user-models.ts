import Joi from 'joi'

const editUserModel = Joi.object({
    name: Joi.string().required(),
    birthday: Joi.string().required(),
    image_url: Joi.string().required()
})

const addOrEditDescripton = Joi.object({
    description: Joi.string().required()
})

 const userModels = {
    editUserModel,
    addOrEditDescripton
}

export default userModels