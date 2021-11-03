import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto, CreateTaskDto_Materias } from '../../dtos/createTask.dto';
import { editTaskDto, editTaskDto_Materias } from '../../dtos/editTask.dto';
import { Alumnos,Materias } from '../../models/task.entity';

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
    @InjectRepository(Materias) private readonly taskRepository: Repository<Materias>
  ) { }

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