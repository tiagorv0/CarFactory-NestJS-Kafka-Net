"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$npmConfigKey1720483028696 = void 0;
class $npmConfigKey1720483028696 {
    constructor() {
        this.name = ' $npmConfigKey1720483028696';
    }
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`cars\``);
    }
}
exports.$npmConfigKey1720483028696 = $npmConfigKey1720483028696;
//# sourceMappingURL=1720483028696-$npm_config_key.js.map