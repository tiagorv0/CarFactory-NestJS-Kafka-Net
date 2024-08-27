import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1720544395810 implements MigrationInterface {
    name = ' $npmConfigName1720544395810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cars\` CHANGE \`name\` \`model\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cars\` DROP COLUMN \`model\``);
        await queryRunner.query(`ALTER TABLE \`cars\` ADD \`model\` enum ('0', '1', '2', '3', '4', '5', '6') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cars\` DROP COLUMN \`model\``);
        await queryRunner.query(`ALTER TABLE \`cars\` ADD \`model\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cars\` CHANGE \`model\` \`name\` varchar(100) NOT NULL`);
    }

}
