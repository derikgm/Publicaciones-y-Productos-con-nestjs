"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsuario = void 0;
const common_1 = require("@nestjs/common");
exports.GetUsuario = (0, common_1.createParamDecorator)((data, execution) => {
    const req = execution.switchToHttp().getRequest();
    const usuario = req.user;
    return (data) ? usuario[data] : usuario;
});
//# sourceMappingURL=get-usuario.decorator.js.map