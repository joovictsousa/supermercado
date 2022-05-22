import { IsDefined } from "class-validator"

export class CreateItemlistaDto {
    @IsDefined()
    quantidade: number

    @IsDefined()
    total: number
}
