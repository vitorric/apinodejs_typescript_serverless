"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../../../infra/db/dynamoose/implementations/userRepository"));
const MailtrapMailProvider_1 = __importDefault(require("../../../infra/providers/implementations/MailtrapMailProvider"));
const UserService_1 = require("../../services/user/UserService");
const userRepository = new userRepository_1.default();
const mailtrapMailProvider = new MailtrapMailProvider_1.default();
const userService = new UserService_1.UserService(userRepository, mailtrapMailProvider);
class UserController {
    async create(event) {
        return userService.create(Object.assign({}, event.body));
    }
    async get(event) {
        const { id } = event.params;
        return userService.get(id);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map