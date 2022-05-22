import { Connection, Repository } from "typeorm"
import { Conta } from "./conta.entity"

export const contaProviders = [
    {
        provide: "CONTA_REPOSITORY",
        useFactory: (connection: Connection) =>
            connection.getRepository(Conta),
        inject: ["DATABASE_CONNECTION"],
    },
]
