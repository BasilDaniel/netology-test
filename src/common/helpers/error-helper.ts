import { message } from "antd";
import { IErrorData } from "../../models/common-models";

enum ErrorType {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  Conflict = 409,
  PayloadTooLarge = 413,
  ExpectationFailed = 417,
  Validation = 422,
  FailedDependency = 424,
  TooManyRequests = 429,
  RetryWith = 449,
  Locked = 423
}

export default function* handleError(error: IErrorData) {
  switch (error.status) {
    case ErrorType.Unauthorized: {
      yield _handleUnauthorizedError(error);
      break;
    }
    default:
      yield _handleUnexpectedError(error);
  }
}

function* _handleUnauthorizedError(error: IErrorData) {
  console.log("ERROR_UNAUTHORIZED", error);
  yield message.destroy();
  return error;
}

function* _handleUnexpectedError(error: IErrorData) {
  console.log("ERROR_UNEXPECTED", error);
  yield message.error("Oops! Something went wrong...");
  return error;
}
