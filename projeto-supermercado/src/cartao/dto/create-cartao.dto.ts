import { IsDefined } from "class-validator"

export class CreateCartaoDto {
    @IsDefined()
    bandeira: string

    @IsDefined()
    numero: string

    @IsDefined()
    CVC: string

    @IsDefined()
    validade: string

    @IsDefined()
    tipo: string

    @IsDefined()
    CPF: string
}
