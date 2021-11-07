import { CreateTaskDto} from "./createTask.dto";
import { CreateTaskDto_Materias} from "./createTaskMateria.dto";
import { CreateTaskDtoAlumno_Materia } from "./createTaskAlumno_Materia.dto";

import { PartialType } from  '@nestjs/mapped-types';

export class editTaskDto extends PartialType(CreateTaskDto){ }


