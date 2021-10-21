"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resJson = void 0;
const resJson = (response, controllerResponse) => response.status(controllerResponse.statusCode).jsonp({
    success: controllerResponse.success,
    payload: controllerResponse.payload,
});
exports.resJson = resJson;
//# sourceMappingURL=index.js.map