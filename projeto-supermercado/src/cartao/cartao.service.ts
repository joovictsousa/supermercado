import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from 'src/cliente/cliente.entity';
import { ClienteService } from 'src/cliente/cliente.service';
import { DtoResult } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { Cartao } from './cartao.entity';
import { CreateCartaoDto } from './dto/create-cartao.dto';

@Injectable()
export class CartaoService {
  constructor(
    @Inject("CARTAO_REPOSITORY")
    private cartaoRepository: Repository<Cartao>,
    @Inject("CLIENTE_REPOSITORY")
    private clienteRepository: Repository<Cliente>,
    private readonly clienteRepository2: ClienteService,
  ) {}

  async findAll(): Promise<Cartao[]> {
    return this.cartaoRepository.find()
  }

  async findId(id: number): Promise<Cartao | undefined> {
    return this.cartaoRepository.findOne({where: {idCartao: id}});
  }

  async insert(data: CreateCartaoDto): Promise<DtoResult>{
      const cartao = new Cartao();
      cartao.bandeira = data.bandeira;
      cartao.numero = data.numero;
      cartao.CVC = data.CVC;
      cartao.validade = data.validade;  
      cartao.tipo = data.tipo;
      const clienteFind = await this.clienteRepository2.findByCpf(data.CPF);
      cartao.cliente = clienteFind;
      return this.cartaoRepository.save(cartao)
        .then(async () => {
          const allCartoes = await this.findAll();
          const ultimoCartao = allCartoes[allCartoes.length -1]
          clienteFind.cartao = ultimoCartao;
          this.clienteRepository.update(clienteFind.idConta, clienteFind);
          return <DtoResult>{
            status: true,
            message: "Cartão foi adicionado",
          }
        })
        .catch((err) => {
          console.log(err)
          return <DtoResult>{
            status: false,
            message: "Cartão não foi adicionado",
          }
        })
  }
}
