import { MigrationInterface, QueryRunner } from 'typeorm';

export class customerEntity1645912922978 implements MigrationInterface {
    name = 'customerEntity1645912922978';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE "customers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "customers"');
    }
}
