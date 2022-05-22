import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './pedido.entity';
import { DtoResult } from 'src/dto/result.dto';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get('find')
  async findAll(): Promise<Pedido[]> {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: number): Promise<Pedido> {
    return this.pedidoService.findId(id);
  }

  @Post('insert')
  async insertPedido(@Body() data: CreatePedidoDto): Promise<DtoResult> {
    return this.pedidoService.insert(data);
  }
}
