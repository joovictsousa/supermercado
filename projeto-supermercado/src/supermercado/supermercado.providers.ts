import { Connection, Repository } from "typeorm"
import { Supermercado } from "./supermercado.entity"

export const supermercadoProviders = [
    {
        provide: "SUPERMERCADO_REPOSITORY",
        useFactory: (connection: Connection) =>
            connection.getRepository(Supermercado),
        inject: ["DATABASE_CONNECTION"],
    },
]
