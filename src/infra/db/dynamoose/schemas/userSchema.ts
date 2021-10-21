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
const model = dynamoose.model('User', schema);

export default model;
