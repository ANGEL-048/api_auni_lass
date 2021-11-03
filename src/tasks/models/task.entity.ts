import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alumnos {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  fecha_nacimiento: string;

  @Column()
  semestre: string;

  @Column()
  grado: string;

}


@Entity()
export class Materias {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  creditos: string;

}