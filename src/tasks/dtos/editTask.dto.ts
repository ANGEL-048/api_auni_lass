import { CreateTaskDto, CreateTaskDto_Materias } from "./createTask.dto";
import { PartialType } from  '@nestjs/mapped-types';

export class editTaskDto extends PartialType(CreateTaskDto){ }


export class editTaskDto_Materias extends PartialType(CreateTaskDto_Materias){ }