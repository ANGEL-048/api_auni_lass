import { Controller, Get, Post, Delete, Put , Body, Param, ParseIntPipe} from '@nestjs/common';
import { CreateTaskDto } from '../dtos/createTask.dto';
import { CreateTaskDto_Materias } from '../dtos/createTaskMateria.dto';
import {  CreateTaskDtoAlumno_Materia } from '../dtos/createTaskAlumno_Materia.dto';

import { editTaskDto } from '../dtos/editTask.dto';
import {  editTaskDto_Materias } from '../dtos/editTaskMateria.dto';
import { editTaskDtoAlumno_Materias } from '../dtos/editTaskAlumno_Materia.dto';

import { TaskService, TaskService_Materias, TaskServiceAlumno_Materia } from '../services/task/task.service';


@Controller('api/v1/alumnos')	
export class TaskController {

	constructor( private readonly taskService : TaskService ){}
  	
  	@Get()
  	public async getTasks(){
	    const data =  await this.taskService.getMany()
		return{
			message : "Peticion correcta",
			data
		}
  	}

	@Get(':id')
  	public async getTask(@Param('id') id: string) {
	    return await this.taskService.getOne(id)

	}

	@Post()
  	public async createTask(@Body() dto: CreateTaskDto ){
		console.log('dto', dto);
		return await this.taskService.createOne(dto)
	}

	



  	@Put(':id')
  	public async editTask(
		@Param('id') id : string,
		@Body() dto : editTaskDto
		){
		return this.taskService.editOne(id, dto)
	}

	@Delete(':id')
	public async deleteTask(@Param('id') id: string) {
		return this.taskService.deleteOne( id )
	}
}	
