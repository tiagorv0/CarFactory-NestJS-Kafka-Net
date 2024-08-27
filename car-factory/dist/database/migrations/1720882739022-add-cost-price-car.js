"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCostPriceCar1720882739022 = void 0;
class AddCostPriceCar1720882739022 {
    constructor() {
        this.name = 'AddCostPriceCar1720882739022';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`cars\` ADD \`costPrice\` decimal(9,2) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`cars\` DROP COLUMN \`costPrice\``);
    }
}
exports.AddCostPriceCar1720882739022 = AddCostPriceCar1720882739022;
//# sourceMappingURL=1720882739022-add-cost-price-car.js.map