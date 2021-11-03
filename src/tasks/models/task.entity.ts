import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

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