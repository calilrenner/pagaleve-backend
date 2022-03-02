import { MigrationInterface, QueryRunner } from 'typeorm';

export class customerData1646238248500 implements MigrationInterface {
    name = 'customerData1646238248500';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "customers" ADD "email" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "customers" ADD "contact" character varying NOT NULL`,
        );
        await queryRunner.query(
            `ALTER TABLE "customers" ADD "number" character varying NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "number"`);
        await queryRunner.query(
            `ALTER TABLE "customers" DROP COLUMN "contact"`,
        );
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "email"`);
    }
}
