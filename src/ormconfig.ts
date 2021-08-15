import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    host: "localhost",
    username: "root",
    port: parseInt('3306'),
    password: "1234",
    database: "databasename",
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    }
}

export = config;