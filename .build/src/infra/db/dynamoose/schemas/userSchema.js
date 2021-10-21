"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamoose_1 = __importDefault(require("dynamoose"));
const { Schema } = dynamoose_1.default;
const schema = new Schema({
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
}, {
    timestamps: true,
});
console.log(process.env.USER_TABLE);
const model = dynamoose_1.default.model(process.env.USER_TABLE, schema);
exports.default = model;
//# sourceMappingURL=userSchema.js.map