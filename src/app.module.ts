import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule, TasksModule_Materias } from './tasks/tasks.module';
import { CoreModule } from './core/core.module';
import { Alumnos,Materias } from './tasks/models/task.entity';
require('dotenv').config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DATABASE,
      entities: [Alumnos,Materias],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TasksModule,
    TasksModule_Materias,
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
