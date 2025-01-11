import { DataSource } from "typeorm"


export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const datasource = new DataSource({
                type: 'sqlite',
                database: 'database.sqlite',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
                logging: true
            });

            return datasource.initialize();
        }
    }
]; 