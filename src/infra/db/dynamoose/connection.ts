import dynamoose from 'dynamoose';

export default function setupDynamoDBClient(): void {
  // if (!process.env.IS_LOCAL) return;

  const host = process.env.LOCALSTACK_HOST;
  const port = process.env.DYNAMODB_PORT;

  console.log('running locally', host, port);
  dynamoose.aws.ddb.local(`http://${host}:${port}`);
}
