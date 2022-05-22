import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DtoResult } from 'src/dto/result.dto';
import { Cartao } from './cartao.entity';
import { CartaoService } from './cartao.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';

@Controller('cartao')
export class CartaoController {
  constructor(private readonly cartaoService: CartaoService) {}

  @Get('find')
  async findAll(): Promise<Cartao[]> {
    return this.cartaoService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: number): Promise<Cartao> {
    return this.cartaoService.findId(id);
  }

  @Post('insert')
  async insertCartao(@Body() data: CreateCartaoDto): Promise<DtoResult> {
    return this.cartaoService.insert(data);
  }
}
