import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule, TasksModule_Materias, TasksModuleAlumnos_Materias } from './tasks/tasks.module';
import { CoreModule } from './core/core.module';




import { Alumnos } from './tasks/models/task.entity';
import { Alumno_Materia } from './tasks/models/task.entityAlumno_Materia';
import {  Materias } from './tasks/models/task.entityMateria';


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
      entities: [Alumnos,Materias,Alumno_Materia],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TasksModule,
    TasksModule_Materias,
    TasksModuleAlumnos_Materias,
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
