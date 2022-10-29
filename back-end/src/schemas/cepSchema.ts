import Joi from "joi";

export const cepSchema = Joi.object({
    cep: Joi.string().pattern(new RegExp('^[0-9]{5}-[0-9]{3}$')).required()
});

export const cepErrorMessage = "Formato de CEP inválido. Por favor, confira o CEP e tente novamente.";

