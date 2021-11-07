import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Pool from 'mysql2/typings/mysql/lib/Pool';
import { Repository } from 'typeorm';
import { CreateTaskDto } from '../../dtos/createTask.dto';
import {  CreateTaskDto_Materias } from '../../dtos/createTaskMateria.dto';
import {  CreateTaskDtoAlumno_Materia } from '../../dtos/createTaskAlumno_Materia.dto';

import { editTaskDto } from '../../dtos/editTask.dto';
import {  editTaskDto_Materias } from '../../dtos/editTaskMateria.dto';
import { editTaskDtoAlumno_Materias } from '../../dtos/editTaskAlumno_Materia.dto';


import { Alumnos } from '../../models/task.entity';
import { Materias } from '../../models/task.entityMateria';
import { Alumno_Materia } from '../../models/task.entityAlumno_Materia';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Alumnos) private readonly taskRepository: Repository<Alumnos>
  ) { }


  public async getMany(): Promise<Alumnos[]> {
    return await this.taskRepository.find()
  }

  public async createOne(dto: CreateTaskDto): Promise<Alumnos> {
    console.log(dto);
    return await this.taskRepository.save(dto)
  }

 

  public async getOne(id: string) {
    return await this.taskRepository.findOne(id)
  }

  public async editOne(id: string, dto: editTaskDto) {
    return await this.taskRepository.update(id, dto);
  }

  public async deleteOne(id: string) {
    console.log(id);
    return await this.taskRepository.delete({id: id});
  }
}

/////////////

@Injectable()
export class TaskService_Materias {
  constructor(
    @InjectRepository(Materias) private readonly taskRepository: Repository<Materias> ) { }

  public async getMany(): Promise<Materias[]> {
    return await this.taskRepository.find()
  }

  public async createOne(dto: CreateTaskDto_Materias): Promise<Materias> {
    console.log(dto);
    return await this.taskRepository.save(dto)
  }




  public async getOne(id: string) {
    return await this.taskRepository.findOne(id)
  }

  public async editOne(id: string, dto: editTaskDto_Materias) {
    return await this.taskRepository.update(id, dto);
  }

  public async deleteOne(id: string) {
    console.log(id);
    return await this.taskRepository.delete({id: id});
  }
}

///////////////////b

@Injectable()
export class TaskServiceAlumno_Materia {
  constructor(
    @InjectRepository(Alumno_Materia) private readonly taskRepository: Repository<Alumno_Materia>
  ) { }

  public async getMany(): Promise<Alumno_Materia[]> {
    return await this.taskRepository.find()
  }

  public async createOne(dto: CreateTaskDtoAlumno_Materia): Promise<Alumno_Materia> {
    console.log(dto);
    return await this.taskRepository.save(dto)
  }

  public async getOne(id: string) {
    return await this.taskRepository.findOne(id)
  }

  public async editOne(id: string, dto: editTaskDtoAlumno_Materias) {
    return await this.taskRepository.update(id, dto);
  }

  public async deleteOne(id: string) {
    console.log(id);
    return await this.taskRepository.delete({id: id});
  }
}