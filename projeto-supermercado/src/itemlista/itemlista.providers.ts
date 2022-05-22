import { Connection, Repository } from "typeorm"
import { Itemlista } from "./itemlista.entity"

export const itemListaProviders = [
    {
        provide: "ITEMLISTA_REPOSITORY",
        useFactory: (connection: Connection) =>
            connection.getRepository(Itemlista),
        inject: ["DATABASE_CONNECTION"],
    },
]
