import { IsDefined } from "class-validator"

export class CreateProdutoDto {
    @IsDefined()
    nome: string

    @IsDefined()
    marca: string

    @IsDefined()
    validade: Date

    @IsDefined()
    fabricacao: Date

    @IsDefined()
    quantidade: number

    @IsDefined()
    preco: number

    @IsDefined()
    categoria: string
}
