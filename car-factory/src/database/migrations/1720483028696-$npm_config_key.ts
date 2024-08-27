import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigKey1720483028696 implements MigrationInterface {
    name = ' $npmConfigKey1720483028696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cars\` (\`id\` int NOT NULL AUTO_INCREMENT, 
            \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
            \`lastUpdateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
            \`active\` tinyint NOT NULL, 
            \`name\` varchar(100) NOT NULL, 
            \`color\` enum ('1', '2', '3', '4', '5') NOT NULL, 
            \`carModel\` enum ('1', '2', '3', '4') NOT NULL, 
            \`year\` int NOT NULL, 
            PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`cars\``);
    }

}
