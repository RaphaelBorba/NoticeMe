import Joi from "joi";

const PostBodyModel = Joi.object({
    title: Joi.string().required(),
    text: Joi.string().required(),
    image_url: Joi.string(),
    user_id: Joi.number().required()
})

const PostModels = {
    PostBodyModel
}

export default PostModels