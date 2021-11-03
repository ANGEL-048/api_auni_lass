import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController, TaskController_Materias } from './controller/task.controller';
import { Alumnos, Materias } from './models/task.entity';
import { TaskService, TaskService_Materias } from './services/task/task.service';

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

