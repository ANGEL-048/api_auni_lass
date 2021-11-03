//import { IsString } from "class-validator";

export class CreateTaskDto{
    //@IsString()
    name : string;

   // @IsString()
    fecha_nacimiento : string;

    semestre : string;

    grado : string;
    
}

export class CreateTaskDto_Materias{
    //@IsString()
    name : string;

    creditos : string;

}