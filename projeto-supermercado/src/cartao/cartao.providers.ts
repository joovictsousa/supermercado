import { Connection, Repository } from "typeorm"
import { Cartao } from "./cartao.entity"

export const cartaoProviders = [
    {
        provide: "CARTAO_REPOSITORY",
        useFactory: (connection: Connection) =>
            connection.getRepository(Cartao),
        inject: ["DATABASE_CONNECTION"],
    },
]
