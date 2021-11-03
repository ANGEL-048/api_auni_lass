import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTaskTable1632938554177 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableTask = new Table({
      name: 'alumnos', columns: [
        {
          name: 'id',
          type: 'VARCHAR',
          length: '36',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'name',
          type: 'VARCHAR',
          length: '50'
        },
        {
          name: 'fecha_nacimiento',
          type: 'VARCHAR',
          length: '250'
        },
        {
          name: 'semestre',
          type: 'VARCHAR',
          length: '250'
        },
        {
          name: 'grado',
          type: 'VARCHAR',
          length: '250'
        }
      ]
    }
    
    
    
    );


    const tableMateria = new Table({
      name: 'materia', columns: [
        {
          name: 'id',
          type: 'VARCHAR',
          length: '36',
          isPrimary: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'name',
          type: 'VARCHAR',
          length: '50'
        },
        {
          name: 'creditos',
          type: 'VARCHAR',
          length: '250'
        }
      ]
    }

    );

    await queryRunner.createTable(tableTask);
    await queryRunner.createTable(tableMateria);
  }
  

  public async down(queryRunner: QueryRunner): Promise<void> {
    const tableTask = await queryRunner.getTable('alumnos');

    if (undefined !== tableTask) {
      await queryRunner.dropTable(tableTask);
    }
  }

  public async down2(queryRunner: QueryRunner): Promise<void> {
    const tableMateria = await queryRunner.getTable('materias');

    if (undefined !== tableMateria) {
      await queryRunner.dropTable(tableMateria);
    }
  }


}
