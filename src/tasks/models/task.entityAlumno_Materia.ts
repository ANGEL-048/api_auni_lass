import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Alumno_Materia {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  id_name: string;

  @Column()
  id_materia: string;

}