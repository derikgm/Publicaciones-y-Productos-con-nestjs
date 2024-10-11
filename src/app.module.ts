import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { PostsModule } from './posts/posts.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PassportModule} from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    PostsModule, 
    ProductsModule, 
    AuthModule,
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      host: process.env.DB_HOST ,
      username: process.env.DB_USERNAME ,
      password: process.env.DB_PASS ,
      database: process.env.DB_DATABASE ,
      port: +process.env.DB_PORT,  //+ para que lo tome como number
      type: 'postgres',
      synchronize: true,
      autoLoadEntities: true
    }),
    PassportModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
