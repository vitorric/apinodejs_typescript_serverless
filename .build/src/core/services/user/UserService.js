"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const ControllerResponse_1 = require("../../controllers/ControllerResponse");
const User_1 = __importDefault(require("../../entities/User"));
class UserService {
    constructor(usersRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }
    async create(data) {
        const userAlreadyExists = await this.usersRepository.exists(data.email);
        if (userAlreadyExists) {
            return (0, ControllerResponse_1.conflict)(new Error('User already exists.'));
        }
        await this.usersRepository.create(new User_1.default(data));
        return (0, ControllerResponse_1.created)();
    }
    async get(id) {
        return (0, ControllerResponse_1.ok)({ id });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map