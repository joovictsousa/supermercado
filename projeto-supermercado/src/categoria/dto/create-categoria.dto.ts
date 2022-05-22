import { IsDefined, IsOptional } from "class-validator";
import { Produto } from "src/produto/produto.entity";

export class CreateCategoriaDto {
    @IsDefined()
    titulo: string
}
