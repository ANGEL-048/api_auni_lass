import { CreateTaskDtoAlumno_Materia } from "./createTaskAlumno_Materia.dto";

import { PartialType } from  '@nestjs/mapped-types';


export class editTaskDtoAlumno_Materias extends PartialType(CreateTaskDtoAlumno_Materia){ }