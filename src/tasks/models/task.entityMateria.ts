import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Materias {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  creditos: string;

}