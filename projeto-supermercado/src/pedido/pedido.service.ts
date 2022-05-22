import { Inject, Injectable } from '@nestjs/common';
import { DtoResult } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @Inject("PEDIDO_REPOSITORY")
    private pedidoRepository: Repository<Pedido>,
  ) {}

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find()
  }

  async findId(id: number): Promise<Pedido | undefined> {
    return this.pedidoRepository.findOne({where: {idPedido: id}});
  }

  async insert(data: CreatePedidoDto): Promise<DtoResult>{
      const pedido = new Pedido();
      pedido.titulo = data.titulo;
      pedido.tipo = data.tipo;
      pedido.entrega = data.entrega;
      pedido.entregue = data.entregue;  
      pedido.valorTotal = data.valorTotal;
      pedido.localizacao = data.localizacao
      return this.pedidoRepository.save(pedido)
        .then(async () => {
          return <DtoResult>{
            status: true,
            message: "Pedido foi adicionado",
          }
        })
        .catch((err) => {
          console.log(err)
          return <DtoResult>{
            status: false,
            message: "Pedido não foi adicionado",
          }
        })
  }
}
