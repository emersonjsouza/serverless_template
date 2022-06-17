import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    console.log('hello world');

    const response = {
      statusCode: 200,
      body: 'hello!',
    };

    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: 'an error occured',
    };
  }
};
