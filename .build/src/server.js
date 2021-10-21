"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const routes_1 = __importDefault(require("./infra/http/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '1000MB' }), express_1.default.urlencoded({ limit: '2000MB', extended: true }));
(0, routes_1.default)(app);
app.use((req, res, next) => {
    return res.status(404).json();
});
module.exports.handler = (0, serverless_http_1.default)(app);
//# sourceMappingURL=server.js.map