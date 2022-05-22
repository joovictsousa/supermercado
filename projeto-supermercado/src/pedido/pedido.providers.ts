import { Connection, Repository } from "typeorm"
import { Pedido } from "./pedido.entity"

export const pedidoProviders = [
    {
        provide: "PEDIDO_REPOSITORY",
        useFactory: (connection: Connection) =>
            connection.getRepository(Pedido),
        inject: ["DATABASE_CONNECTION"],
    },
]
