import { Controller, Get, Post, Delete, Put , Body, Param, ParseIntPipe} from '@nestjs/common';
import { CreateTaskDto } from '../dtos/createTask.dto';
import { CreateTaskDto_Materias } from '../dtos/createTaskMateria.dto';
import {  CreateTaskDtoAlumno_Materia } from '../dtos/createTaskAlumno_Materia.dto';

import { editTaskDto } from '../dtos/editTask.dto';
import {  editTaskDto_Materias } from '../dtos/editTaskMateria.dto';
import { editTaskDtoAlumno_Materias } from '../dtos/editTaskAlumno_Materia.dto';

import { TaskService, TaskService_Materias, TaskServiceAlumno_Materia } from '../services/task/task.service';






//////////////MATERIAS

@Controller('api/v1/Materias')	
export class TaskController_Materias {

	constructor( private readonly taskService_materias : TaskService_Materias){}
  	
  	@Get()
  	public async getTasks(){
	    const data =  await this.taskService_materias.getMany()
		return{
			message : "Peticion correcta",
			data
		}
  	}

	@Get(':id')
  	public async getTask(@Param('id') id: string) {
	    return await this.taskService_materias.getOne(id)

	}

	@Post()
  	public async createTask(@Body() dto: CreateTaskDto_Materias ){
		console.log('dto', dto);
		return await this.taskService_materias.createOne(dto)
	}


  	@Put(':id')
  	public async editTask(
		@Param('id') id : string,
		@Body() dto : editTaskDto_Materias
		){
		return this.taskService_materias.editOne(id, dto)
	}

	@Delete(':id')
	public async deleteTask(@Param('id') id: string) {
		return this.taskService_materias.deleteOne( id )
	}
}	
