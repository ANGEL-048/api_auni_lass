import { CreateTaskDto_Materias} from "./createTaskMateria.dto";

import { PartialType } from  '@nestjs/mapped-types';

export class editTaskDto_Materias extends PartialType(CreateTaskDto_Materias){ }