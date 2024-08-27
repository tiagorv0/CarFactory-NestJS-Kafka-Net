"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$npmConfigName1720544395810 = void 0;
class $npmConfigName1720544395810 {
    constructor() {
        this.name = ' $npmConfigName1720544395810';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`cars\` CHANGE \`name\` \`model\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cars\` DROP COLUMN \`model\``);
        await queryRunner.query(`ALTER TABLE \`cars\` ADD \`model\` enum ('0', '1', '2', '3', '4', '5', '6') NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`cars\` DROP COLUMN \`model\``);
        await queryRunner.query(`ALTER TABLE \`cars\` ADD \`model\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cars\` CHANGE \`model\` \`name\` varchar(100) NOT NULL`);
    }
}
exports.$npmConfigName1720544395810 = $npmConfigName1720544395810;
//# sourceMappingURL=1720544395810-$npm_config_name.js.map