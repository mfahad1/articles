import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { UsersService } from './users/users.service';
import { ArticlesModule } from './articles/articles.module';
import { Articles } from './articles/articles.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql' as const,
        host: configService.get<string>('MYSQLDB_HOST'),
        port: parseInt(configService.get<string>('MYSQLDB_DOCKER_PORT')),
        username: configService.get<string>('MYSQLDB_USER'),
        password: configService.get<string>('MYSQLDB_PASSWORD'),
        database: configService.get<string>('MYSQLDB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        seeds: ['dist/db/seeds/**/*.js'],
        synchronize: true,
        autoLoadEntities: true,
        autoSchemaSync: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([User, Articles]),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
