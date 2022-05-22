import { Connection, Repository } from "typeorm"
import { Categoria } from "./categoria.entity"

export const categoriaProviders = [
    {
        provide: "CATEGORIA_REPOSITORY",
        useFactory: (connection: Connection) =>
            connection.getRepository(Categoria),
        inject: ["DATABASE_CONNECTION"],
    },
]
