import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateTaskDto, CreateTaskDto_Materias } from '../../dtos/createTask.dto';
import { editTaskDto, editTaskDto_Materias } from '../../dtos/editTask.dto';
import { Alumnos, Materias } from '../../models/task.entity';
import { TaskService, TaskService_Materias } from './task.service';


const mockTask = new CreateTaskDto();
mockTask.name = 'TastTest';
mockTask.fecha_nacimiento = '18/04/99';
mockTask.semestre = 'segundo';
mockTask.grado= 'primero';

const taskGet = new Alumnos();
taskGet.id = 'e635dffc-f48f-42e7-b8de-f4a7f654ac81';
taskGet.name = 'luis';
taskGet.fecha_nacimiento = '07/04/99';
taskGet.semestre = 'segundo';
taskGet.grado= 'primero';

const task2 = new Alumnos();
task2.id = '364a9187-8956-4a9f-b285-a10b82cb4413';
task2.name = 'juan';
task2.fecha_nacimiento = '24/08/99';
taskGet.semestre = 'cuarto';
taskGet.grado= 'segundo';


let allTask: Alumnos[] = []

allTask.push(taskGet);
allTask.push(task2);

const deleteTask = new Alumnos();
deleteTask.id = 'b09b3a7a-ccd8-4728-bc78-299c65d3ff9c';
deleteTask.name = 'luis_delete';
deleteTask.fecha_nacimiento = '24/08/99-delete';
deleteTask.semestre = 'cuarto-delete';
deleteTask.grado= 'segundo-delete';


const updateTask = new Alumnos();
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
        provide: getRepositoryToken(Alumnos),
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

////////////////////////////////


const mockMaterias = new CreateTaskDto_Materias();
mockMaterias.name = 'TastTest';
mockMaterias.creditos = '10';


const materiasGet = new Materias();
materiasGet.id = 'e635dffc-f48f-42e7-b8de-f4a7f654ac81';
materiasGet.name = 'luis';
materiasGet.creditos = '9';


const Materias2 = new Materias();
Materias2.id = '364a9187-8956-4a9f-b285-a10b82cb4413';
Materias2.name = 'juan';
Materias2.creditos = '8';



let allMaterias: Materias[] = []

allMaterias.push(materiasGet);
allMaterias.push(Materias2);

const deleteMaterias = new Materias();
deleteMaterias.id = 'f27345d0-b6cf-4b68-9cc9-07b17a9f2acf';
deleteMaterias.name = 'luis_delete';
deleteMaterias.creditos = '4-delete';



const updateMaterias = new Materias();
updateMaterias.id = 'b9d594dd-2969-4552-bb8f-c6b1b871c50d';
updateMaterias.name = 'juan_delete';
updateMaterias.creditos = '10-update';



describe('TaskService_Materias', () => {
  let service: TaskService_Materias;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService_Materias, 
      {
        provide: getRepositoryToken(Materias),
        useValue: {
          save: jest.fn().mockResolvedValue(mockMaterias),
          findOne: jest.fn().mockResolvedValue(materiasGet),
          find: jest.fn().mockReturnValue(allMaterias),
          delete: jest.fn().mockReturnValue(deleteMaterias),
          update: jest.fn().mockResolvedValue(updateMaterias),
        }
      }],
    }).compile();

    service = await module.resolve(TaskService_Materias);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create task success', async () => {
    const Materia = new CreateTaskDto_Materias();

    Materia.name = 'TastTest',
    Materia.creditos = 'creditos-test'

    const MateriaSaved = await service.createOne(Materia)

    expect(MateriaSaved.name).toEqual(mockMaterias.name)
  })

  it('get all task success', async () => {
    const find = await service.getMany();
    console.log(find);
    expect(find).toEqual(allMaterias)
    
  })

  it('get a task success', async() =>{
    const idMaterias = "e635dffc-f48f-42e7-b8de-f4a7f654ac81"
    const savedId = await service.getOne(idMaterias)

    expect(savedId.id).toEqual(idMaterias);
  })

  it('update task by id', async () => {
    const newMateria = new editTaskDto_Materias();
    newMateria.name = "New Name of Task";
    newMateria.creditos = "New credit";
    const idTask = 'b9d594dd-2969-4552-bb8f-c6b1b871c50d'
    const updateData = await service.editOne( idTask, newMateria)
    expect(newMateria.name).toEqual(newMateria.name)
  });


  it('delete task by id', async () => {
    const idDeleteMateria = 'f27345d0-b6cf-4b68-9cc9-07b17a9f2acf'
    const deleteMaterias = await service.deleteOne(idDeleteMateria)
    console.log(deleteMaterias)
    expect(deleteMaterias ).toEqual(deleteMaterias)
  })
});