import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import * as uuid from "uuid";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
      "X-Request-ID": uuid.v4(),
    },
    body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
  };
};
