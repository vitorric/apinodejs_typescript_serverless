import dynamoose from 'dynamoose';

const { Schema } = dynamoose;

const schema = new Schema(
  {
    id: {
      type: String,
      required: true,
      hashKey: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Admin'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

console.log(process.env.USER_TABLE);
const model = dynamoose.model(process.env.USER_TABLE as string, schema);

export default model;
