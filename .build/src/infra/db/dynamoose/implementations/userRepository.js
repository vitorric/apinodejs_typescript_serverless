"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../../../core/entities/User"));
const userSchema_1 = __importDefault(require("../schemas/userSchema"));
class UsersRepository {
    async exists(id) {
        const user = await userSchema_1.default.query({ id: { eq: id } }).exec();
        return !!user;
    }
    async create(user) {
        try {
            await userSchema_1.default.create(user);
        }
        catch (err) {
            console.log(err.message);
            throw new Error('400 :: Bad params');
        }
    }
    async findById(id) {
        return new User_1.default({ name: '1', email: id, password: '', role: '' });
    }
}
exports.default = UsersRepository;
//# sourceMappingURL=userRepository.js.map