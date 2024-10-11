"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const rol_guard_guard_1 = require("../guards/rol-guard.guard");
const rol_protected_decorator_1 = require("./rol-protected.decorator");
const passport_1 = require("@nestjs/passport");
const Auth = (...rol) => {
    return (0, common_1.applyDecorators)((0, rol_protected_decorator_1.RolProtected)(...rol), (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), rol_guard_guard_1.RolGuard));
};
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map