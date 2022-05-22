import { IsDefined, IsNumber, IsOptional } from "class-validator"

export class CreateSupermercadoDto {
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
    CNPJ: string
    
    @IsDefined()
    telefone: string

    @IsDefined()
    funcionamento: string
}
