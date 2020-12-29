import joi from 'joi'
const schema = joi.object().keys({
  name:joi
        .string()
        .min(2)
        .max(50)
        .required(),
    phone:joi
        .number()
        .min(11)
       
        .required(),
    role:joi
         .string(),
    password : joi
        .string()
        .alphanum()
        .required()
        .min(2)
   
})

const validation = (data) => {
    const result =schema.validate(data)
    result.value = data ;
    return result
}

export default validation