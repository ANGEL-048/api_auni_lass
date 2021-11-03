import { Controller, Get, Post, Delete, Put , Body, Param, ParseIntPipe} from '@nestjs/common';
import { CreateTaskDto, CreateTaskDto_Materias } from '../dtos/createTask.dto';
import { editTaskDto, editTaskDto_Materias } from '../dtos/editTask.dto';
import { TaskService, TaskService_Materias } from '../services/task/task.service';


@Controller('api/v1/alumnos')	
export class TaskController {

	constructor( private readonly taskService : TaskService){}
  	
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

