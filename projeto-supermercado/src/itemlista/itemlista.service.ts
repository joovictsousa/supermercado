import { Inject, Injectable } from '@nestjs/common';
import { DtoResult } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { CreateItemlistaDto } from './dto/create-itemlista.dto';
import { UpdateItemlistaDto } from './dto/update-itemlista.dto';
import { Itemlista } from './itemlista.entity';

@Injectable()
export class ItemlistaService {
  constructor(
    @Inject("ITEMLISTA_REPOSITORY")
    private pedidoRepository: Repository<Itemlista>,
  ) {}

  async findAll(): Promise<Itemlista[]> {
    return this.pedidoRepository.find()
  }

  async findId(id: number): Promise<Itemlista | undefined> {
    return this.pedidoRepository.findOne({where: {idItemLista: id}});
  }

  async insert(data: CreateItemlistaDto): Promise<DtoResult>{
      const itemLista = new Itemlista();
      itemLista.quantidade = data.quantidade;
      itemLista.total = data.total;

      return this.pedidoRepository.save(itemLista)
        .then(async () => {
          return <DtoResult>{
            status: true,
            message: "Item Lista foi adicionado",
          }
        })
        .catch((err) => {
          console.log(err)
          return <DtoResult>{
            status: false,
            message: "Item Lista não foi adicionado",
          }
        })
  }
}
