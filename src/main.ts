import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap')


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )

  const config = new DocumentBuilder()
    .setTitle('Productos y servicios API')
    .setDescription('Endpoints de la API')
    .setVersion('1.0')
    .addTag('Venta') 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app,document)

  await app.listen(process.env.PORT);
  logger.log(`Aplicacion corriendo en el puerto ${process.env.PORT}`)
  
}
bootstrap();
