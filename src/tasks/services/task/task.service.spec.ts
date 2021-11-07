import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateTaskDto } from '../../dtos/createTask.dto';
import {  CreateTaskDto_Materias } from '../../dtos/createTaskMateria.dto';
import { CreateTaskDtoAlumno_Materia } from '../../dtos/createTaskAlumno_Materia.dto';


import { editTaskDto } from '../../dtos/editTask.dto';
import { editTaskDto_Materias } from '../../dtos/editTaskMateria.dto';
import { editTaskDtoAlumno_Materias } from '../../dtos/editTaskAlumno_Materia.dto';

import { Alumnos} from '../../models/task.entity';
import { Materias } from '../../models/task.entityMateria';
import {Alumno_Materia } from '../../models/task.entityAlumno_Materia';


import { TaskService, TaskServiceAlumno_Materia, TaskService_Materias } from './task.service';


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

//////////////////////////////// MATERIA


const mockMaterias = new CreateTaskDto_Materias();
mockMaterias.name = 'TastTest';
mockMaterias.creditos = '10';


const materiasGet = new Materias();
materiasGet.id = 'e0822032-ca1e-44ac-9f9b-95c215a1ff26';
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
    const idMaterias = "e0822032-ca1e-44ac-9f9b-95c215a1ff26"
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

////////////ALUMNO_MATERIA



const mockAlumno_Materias = new CreateTaskDtoAlumno_Materia();
mockAlumno_Materias.id_name = 'TastTest';
mockAlumno_Materias.id_materia = '10';


const Alumno_materiasGet = new Alumno_Materia();
Alumno_materiasGet.id = '87409c22-3ede-4877-959c-f12aed23ceb4';
Alumno_materiasGet.id_name = 'luis';
Alumno_materiasGet.id_materia = '9';


const Alumno_Materias2 = new Alumno_Materia();
Alumno_Materias2.id = '364a9187-8956-4a9f-b285-a10b82cb4413';
Alumno_Materias2.id_name = 'juan';
Alumno_Materias2.id_materia = '8';



let allAlumno_Materias: Alumno_Materia[] = []

allAlumno_Materias.push(Alumno_materiasGet);
allAlumno_Materias.push(Alumno_Materias2);

const deleteAlumno_Materias = new Alumno_Materia();
deleteAlumno_Materias.id = 'ed19e6a1-3123-4daa-bad6-91222b63a468';
deleteAlumno_Materias.id_name = 'luis_delete';
deleteAlumno_Materias.id_materia = '4-delete';



const updateAlumno_Materias = new Alumno_Materia();
updateAlumno_Materias.id = '1cdc5364-c24d-4308-9283-5ebc0c4af8c0';
updateAlumno_Materias.id_name = 'juan_delete';
updateAlumno_Materias.id_materia = '10-update';



describe('TaskServiceAlumno_Materias', () => {
  let service: TaskServiceAlumno_Materia;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskServiceAlumno_Materia, 
      {
        provide: getRepositoryToken(Alumno_Materia),
        useValue: {
          save: jest.fn().mockResolvedValue(mockAlumno_Materias),
          findOne: jest.fn().mockResolvedValue(Alumno_materiasGet),
          find: jest.fn().mockReturnValue(allAlumno_Materias),
          delete: jest.fn().mockReturnValue(deleteAlumno_Materias),
          update: jest.fn().mockResolvedValue(updateAlumno_Materias),
        }
      }],
    }).compile();

    service = await module.resolve(TaskServiceAlumno_Materia);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create task success', async () => {
    const Alumno_Materia = new CreateTaskDtoAlumno_Materia();

    Alumno_Materia.id_name = 'TastTest';
    Alumno_Materia.id_materia = 'creditos-test';

    const Alumno_MateriaSaved = await service.createOne(Alumno_Materia);

    expect(Alumno_MateriaSaved.id_name).toEqual(mockAlumno_Materias.id_name);
  })

  it('get all task success', async () => {
    const find = await service.getMany();
    console.log(find);
    expect(find).toEqual(allAlumno_Materias);
    
  })

  it('get a task success', async() =>{
    const idAlumno_Materias = "87409c22-3ede-4877-959c-f12aed23ceb4";
    const savedId = await service.getOne(idAlumno_Materias);

    expect(savedId.id).toEqual(idAlumno_Materias);
  })

  it('update task by id', async () => {
    const newAlumno_Materia = new editTaskDtoAlumno_Materias();
    newAlumno_Materia.id_name = "New Name of Task";
    newAlumno_Materia.id_materia = "New credit";
    const idTask = '1cdc5364-c24d-4308-9283-5ebc0c4af8c0';
    const updateData = await service.editOne( idTask, newAlumno_Materia);
    expect(newAlumno_Materia.id_name).toEqual(newAlumno_Materia.id_name);
  });


  it('delete task by id', async () => {
    const idDeleteAlumno_Materia = 'ed19e6a1-3123-4daa-bad6-91222b63a468';
    const deleteAlumno_Materias = await service.deleteOne(idDeleteAlumno_Materia);
    console.log(deleteAlumno_Materias);
    expect(deleteAlumno_Materias ).toEqual(deleteAlumno_Materias);
  })
});