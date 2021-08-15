import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1629024521358 implements MigrationInterface {
    name = 'migration1629024521358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nestjs\`.\`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`isVisible\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`nestjs\`.\`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, \`surname\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`password\` varchar(70) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`nestjs\`.\`users\``);
        await queryRunner.query(`DROP TABLE \`nestjs\`.\`posts\``);
    }

}
