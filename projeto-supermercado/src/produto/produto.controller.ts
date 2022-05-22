import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './produto.entity';
import { DtoResult } from 'src/dto/result.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get('find')
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: number): Promise<Produto> {
    return this.produtoService.findId(id);
  }

  @Post('insert')
  async insertCliente(@Body() data: CreateProdutoDto): Promise<DtoResult> {
    return this.produtoService.insert(data);
  }
}
