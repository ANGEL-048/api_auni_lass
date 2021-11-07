import { Controller, Get, Post, Delete, Put , Body, Param, ParseIntPipe} from '@nestjs/common';
import { CreateTaskDto } from '../dtos/createTask.dto';
import { CreateTaskDto_Materias } from '../dtos/createTaskMateria.dto';
import {  CreateTaskDtoAlumno_Materia } from '../dtos/createTaskAlumno_Materia.dto';

import { editTaskDto } from '../dtos/editTask.dto';
import {  editTaskDto_Materias } from '../dtos/editTaskMateria.dto';
import { editTaskDtoAlumno_Materias } from '../dtos/editTaskAlumno_Materia.dto';

import { TaskService, TaskService_Materias, TaskServiceAlumno_Materia } from '../services/task/task.service';



//////////////ALUMNO MATERIA

@Controller('api/v1/materia_alumno')	
export class TaskControllerAlumno_Materias {

	constructor( private readonly taskServiceAlumno_materias : TaskServiceAlumno_Materia){}
  	
  	@Get()
  	public async getTasks(){
	    const data =  await this.taskServiceAlumno_materias.getMany()
		return{
			message : "Peticion correcta",
			data
		}
  	}

	@Get(':id')
  	public async getTask(@Param('id') id: string) {
	    return await this.taskServiceAlumno_materias.getOne(id)

	}


  	@Put(':id')
  	public async editTask(
		@Param('id') id : string,
		@Body() dto : editTaskDtoAlumno_Materias
		){
		return this.taskServiceAlumno_materias.editOne(id, dto)
	}

		@Post()
	public async createTaskAlumno_Materia(@Body() dto: CreateTaskDtoAlumno_Materia ){
	  console.log('dto', dto);
	  return await this.taskServiceAlumno_materias.createOne(dto)
  }

	@Delete(':id')
	public async deleteTask(@Param('id') id: string) {
		return this.taskServiceAlumno_materias.deleteOne( id )
	}
}	



