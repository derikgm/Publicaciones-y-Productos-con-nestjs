"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('Bootstrap');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Productos y servicios API')
        .setDescription('Endpoints de la API')
        .setVersion('1.0')
        .addTag('Venta')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT);
    logger.log(`Aplicacion corriendo en el puerto ${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map