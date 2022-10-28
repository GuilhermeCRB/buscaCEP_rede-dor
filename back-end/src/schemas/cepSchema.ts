import Joi from "joi";

export const cepProperties = ["cep"];

export const cepSchema = Joi.object({
    cep: Joi.string().pattern(new RegExp('^[0-9]{8}$')).required()
});

export const cepErrorMessage = "Formato de CEP inválido. Por favor, confira o CEP e tente novamente.";

