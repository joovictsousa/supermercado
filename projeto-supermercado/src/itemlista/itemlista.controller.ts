import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemlistaService } from './itemlista.service';
import { CreateItemlistaDto } from './dto/create-itemlista.dto';
import { UpdateItemlistaDto } from './dto/update-itemlista.dto';
import { Itemlista } from './itemlista.entity';
import { DtoResult } from 'src/dto/result.dto';

@Controller('itemlista')
export class ItemlistaController {
  constructor(private readonly itemlistaService: ItemlistaService) {}

  @Get('find')
  async findAll(): Promise<Itemlista[]> {
    return this.itemlistaService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: number): Promise<Itemlista> {
    return this.itemlistaService.findId(id);
  }

  @Post('insert')
  async insertItemLista(@Body() data: CreateItemlistaDto): Promise<DtoResult> {
    return this.itemlistaService.insert(data);
  }
}
