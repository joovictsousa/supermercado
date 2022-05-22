import { PartialType } from '@nestjs/mapped-types';
import { IsDefined } from 'class-validator';
import { Produto } from 'src/produto/produto.entity';
import { CreateCategoriaDto } from './create-categoria.dto';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
    @IsDefined()
    produto: Produto
}
