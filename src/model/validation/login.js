import joi from 'joi'
const schema = joi.object().keys({
     phone:joi
        .number()
        .min(11)
       
        .required(),
    password: joi
        .string()
        .alphanum()
        .required()
        .min(2)

})

const validation = (data) => {
    const result = schema.validate(data)
    result.value = data;
    return result
}

export default validation