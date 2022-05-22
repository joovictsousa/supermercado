import { IsDefined } from "class-validator"

export class CreatePedidoDto {
    @IsDefined()
    titulo: string

    @IsDefined()
    tipo: string

    @IsDefined()
    entrega: Date

    @IsDefined()
    entregue: boolean

    @IsDefined()
    valorTotal: number

    @IsDefined()
    localizacao: string
}
