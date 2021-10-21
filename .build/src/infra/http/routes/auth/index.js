"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../../../../core/controllers/user/UserController"));
const utils_1 = require("../../utils");
const router = (0, express_1.Router)();
const userController = new UserController_1.default();
router.post('/create', async (request, response) => (0, utils_1.resJson)(response, await userController.create(Object.assign({}, request))));
router.get('/get/:id', async (request, response) => (0, utils_1.resJson)(response, await userController.get(Object.assign({}, request))));
exports.default = router;
//# sourceMappingURL=index.js.map