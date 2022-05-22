import { isDefined, IsDefined, IsNumber, IsOptional } from "class-validator"

export class CreateClienteDto {
    @IsDefined()
    nome: string

    @IsDefined()
    endereco: string

    @IsOptional()
    localizacao: string

    @IsDefined()
    email: string

    @IsDefined()
    senha: string

    @IsDefined()
    CPF: string
    
    @IsDefined()
    telefone: string
}
