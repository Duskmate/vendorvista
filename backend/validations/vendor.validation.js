const Joi = require("joi");

const register = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        BankAccount: Joi.number().required(),
        BankName: Joi.string().required(),
        AddressLine1: Joi.any().required(),
        AddressLine2: Joi.any(),
        City: Joi.string().required(),
        Country: Joi.string().required(),
        ZipCode: Joi.number().required()
    })
}

const update = {
    body: Joi.object().keys({
        id: Joi.any().required(),
        vendor: Joi.any().allow('')
    })
}

module.exports = {
    register,
    update
}