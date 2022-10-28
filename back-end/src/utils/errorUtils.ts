type ErrorType = "not_found" | "unprocessable_entity";

export interface AppError {
  type: ErrorType;
  message: string | string[];
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}

export function errorTypeToStatusCode(type: ErrorType) {
  if (type === "not_found") return 404;
  if (type === "unprocessable_entity") return 422;
}

export function notFoundError(message?: string): AppError {
  return { type: "not_found", message: message ?? "" };
}

export function unprocessableEntityError(message?: string | string[]): AppError {
  return { type: "unprocessable_entity", message: message ?? "" };
}
