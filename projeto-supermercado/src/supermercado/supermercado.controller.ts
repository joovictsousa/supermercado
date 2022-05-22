import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupermercadoService } from './supermercado.service';
import { CreateSupermercadoDto } from './dto/create-supermercado.dto';
import { UpdateSupermercadoDto } from './dto/update-supermercado.dto';
import { Supermercado } from './supermercado.entity';
import { DtoResult } from 'src/dto/result.dto';

@Controller('supermercado')
export class SupermercadoController {
  constructor(private readonly supermercadoService: SupermercadoService) {}

  @Get('find')
  async findAll(): Promise<Supermercado[]> {
    return this.supermercadoService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: number): Promise<Supermercado> {
    return this.supermercadoService.findId(id);
  }

  @Post('insert')
  async insertSupermercado(@Body() data: CreateSupermercadoDto): Promise<DtoResult> {
    return this.supermercadoService.insert(data);
  }
}
