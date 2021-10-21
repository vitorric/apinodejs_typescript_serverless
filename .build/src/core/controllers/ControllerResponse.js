"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = exports.tooMany = exports.conflict = exports.notFound = exports.forbidden = exports.unauthorized = exports.badRequest = exports.created = exports.ok = void 0;
function ok(dto) {
    return {
        statusCode: 200,
        payload: dto,
        success: true,
    };
}
exports.ok = ok;
function created() {
    return {
        statusCode: 201,
        payload: undefined,
        success: true,
    };
}
exports.created = created;
function badRequest(error) {
    return {
        statusCode: 400,
        payload: {
            error: error.message,
        },
        success: false,
    };
}
exports.badRequest = badRequest;
function unauthorized(error) {
    return {
        statusCode: 401,
        payload: {
            error: error.message,
        },
        success: false,
    };
}
exports.unauthorized = unauthorized;
function forbidden(error) {
    return {
        statusCode: 403,
        payload: {
            error: error.message,
        },
        success: false,
    };
}
exports.forbidden = forbidden;
function notFound(error) {
    return {
        statusCode: 404,
        payload: {
            error: error.message,
        },
        success: false,
    };
}
exports.notFound = notFound;
function conflict(error) {
    return {
        statusCode: 409,
        payload: {
            error: error.message,
        },
        success: false,
    };
}
exports.conflict = conflict;
function tooMany(error) {
    return {
        statusCode: 429,
        payload: {
            error: error.message,
        },
        success: false,
    };
}
exports.tooMany = tooMany;
function fail(error) {
    console.log(error);
    return {
        statusCode: 500,
        payload: {
            error: error.message,
        },
        success: false,
    };
}
exports.fail = fail;
//# sourceMappingURL=ControllerResponse.js.map