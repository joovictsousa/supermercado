import { Connection, Repository } from "typeorm"
import { Telefone } from "./telefone.entity"

export const telefoneProviders = [
    {
        provide: "TELEFONE_REPOSITORY",
        useFactory: (connection: Connection) =>
            connection.getRepository(Telefone),
        inject: ["DATABASE_CONNECTION"],
    },
]
