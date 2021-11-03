import { Controller } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { assert } from 'console';
import { TasksModule } from 'src/tasks/tasks.module';
import { CreateTaskDto } from '../../dtos/createTask.dto';
import { editTaskDto } from '../../dtos/editTask.dto';
import { Task } from '../../models/task.entity';
import { TaskService } from './task.service';


const mockTask = new CreateTaskDto();
mockTask.name = 'TastTest';
mockTask.fecha_nacimiento = '18/04/99';
mockTask.semestre = 'segundo';
mockTask.grado= 'primero';

const taskGet = new Task();
taskGet.id = 'e635dffc-f48f-42e7-b8de-f4a7f654ac81';
taskGet.name = 'luis';
taskGet.fecha_nacimiento = '07/04/99';
taskGet.semestre = 'segundo';
taskGet.grado= 'primero';

const task2 = new Task();
task2.id = '364a9187-8956-4a9f-b285-a10b82cb4413';
task2.name = 'juan';
task2.fecha_nacimiento = '24/08/99';
taskGet.semestre = 'cuarto';
taskGet.grado= 'segundo';


let allTask: Task[] = []

allTask.push(taskGet);
allTask.push(task2);

const deleteTask = new Task();
deleteTask.id = 'b09b3a7a-ccd8-4728-bc78-299c65d3ff9c';
deleteTask.name = 'luis_delete';
deleteTask.fecha_nacimiento = '24/08/99-delete';
deleteTask.semestre = 'cuarto-delete';
deleteTask.grado= 'segundo-delete';


const updateTask = new Task();
updateTask.id = 'f671a59f-9e4d-4618-8800-bfa757a7ceda';
updateTask.name = 'juan_delete';
updateTask.fecha_nacimiento = '07/04/99-delete';
updateTask.semestre = 'segundo-delete';
updateTask.grado= 'primero-delete';




describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService, 
      {
        provide: getRepositoryToken(Task),
        useValue: {
          save: jest.fn().mockResolvedValue(mockTask),
          findOne: jest.fn().mockResolvedValue(taskGet),
          find: jest.fn().mockReturnValue(allTask),
          delete: jest.fn().mockReturnValue(deleteTask),
          update: jest.fn().mockResolvedValue(updateTask),
        }
      }],
    }).compile();

    service = await module.resolve(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create task success', async () => {
    const task = new CreateTaskDto();

    task.name = 'TastTest',
    task.fecha_nacimiento = 'Test'
    task.semestre = 'semestretest'
    task.grado = 'primero-test'
    const taskSaved = await service.createOne(task)

    expect(taskSaved.name).toEqual(mockTask.name)
  })

  it('get all task success', async () => {
    
    const find = await service.getMany();
    console.log(find);
    expect(find).toEqual(allTask)
    
  })

  it('get a task success', async() =>{
    const idTask = "e635dffc-f48f-42e7-b8de-f4a7f654ac81"
    const savedId = await service.getOne(idTask)

    expect(savedId.id).toEqual(idTask);
  })

  it('update task by id', async () => {
    const newTask = new editTaskDto();
    newTask.name = "New Name of Task";
    newTask.fecha_nacimiento = "New fecha nacimiento";
    newTask.semestre = 'new smestre'
    newTask.grado = 'new grado'
    const idTask = 'f671a59f-9e4d-4618-8800-bfa757a7ceda'
    
    const updateData = await service.editOne( idTask, newTask)
    expect(newTask.name).toEqual(newTask.name)
  });


  it('delete task by id', async () => {
    const idDeleteTask = 'b09b3a7a-ccd8-4728-bc78-299c65d3ff9c'
    const deleteTasks = await service.deleteOne(idDeleteTask)
    console.log(deleteTask)


    expect(deleteTasks ).toEqual(deleteTask)
  })
});