import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController} from './controller/task.controller';
import { TaskController_Materias } from './controller/task.controllerMateria';
import {  TaskControllerAlumno_Materias } from './controller/task.controllerAlumno_Materia';

import { Alumnos } from './models/task.entity';
import { Alumno_Materia } from './models/task.entityAlumno_Materia';
import {  Materias } from './models/task.entityMateria';

import { TaskService, TaskService_Materias, TaskServiceAlumno_Materia} from './services/task/task.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alumnos])
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TasksModule {}

@Module({
  imports: [
    TypeOrmModule.forFeature([Materias])
  ],
  controllers: [TaskController_Materias],
  providers: [TaskService_Materias],
})
export class TasksModule_Materias {}

@Module({
  imports: [
    TypeOrmModule.forFeature([Alumno_Materia])
  ],
  controllers: [TaskControllerAlumno_Materias],
  providers: [TaskServiceAlumno_Materia],
})
export class TasksModuleAlumnos_Materias {}


