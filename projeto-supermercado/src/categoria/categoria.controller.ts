import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DtoResult } from 'src/dto/result.dto';
import { Categoria } from './categoria.entity';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get('find')
  async findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: number): Promise<Categoria> {
    return this.categoriaService.findId(id);
  }

  @Post('insert')
  async insertCategoria(@Body() data: CreateCategoriaDto): Promise<DtoResult> {
    return this.categoriaService.insert(data);
  }

  @Put('update')
  async updateCategoria(@Body() data: UpdateCategoriaDto): Promise<DtoResult> {
    return this.categoriaService.update(data);
  }
}
