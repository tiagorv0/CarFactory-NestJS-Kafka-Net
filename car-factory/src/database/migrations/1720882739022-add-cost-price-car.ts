import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCostPriceCar1720882739022 implements MigrationInterface {
    name = 'AddCostPriceCar1720882739022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cars\` ADD \`costPrice\` decimal(9,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cars\` DROP COLUMN \`costPrice\``);
    }

}
