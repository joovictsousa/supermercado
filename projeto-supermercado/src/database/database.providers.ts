import { createConnection } from "typeorm"

export const databaseProviders = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: async () =>
            createConnection({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "root",
                database: "projetosupermercado",
                entities: [__dirname + "/../**/*.entity{.ts,.js}"],
                synchronize: true,
            }),
    },
]
