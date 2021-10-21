"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
})(Roles = exports.Roles || (exports.Roles = {}));
class User {
    constructor(props) {
        Object.assign(this, props);
    }
}
exports.default = User;
User.Roles = Roles;
//# sourceMappingURL=User.js.map