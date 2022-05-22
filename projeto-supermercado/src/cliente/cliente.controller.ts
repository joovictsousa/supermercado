import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DtoResult } from 'src/dto/result.dto';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get('find')
  async findAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: number): Promise<Cliente> {
    return this.clienteService.findId(id);
  }

  @Post('insert')
  async insertCliente(@Body() data: CreateClienteDto): Promise<DtoResult> {
    return this.clienteService.insert(data);
  }
}
