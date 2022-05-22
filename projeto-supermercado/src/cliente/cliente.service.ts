import { Inject, Injectable } from '@nestjs/common';
import { DtoResult } from 'src/dto/result.dto';
import { Telefone } from 'src/telefone/telefone.entity';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @Inject("CLIENTE_REPOSITORY")
    private clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find()
  }

  async findId(id: number): Promise<Cliente | undefined> {
    return this.clienteRepository.findOne({where: {idConta: id}});
  }

  async findByCpf(CPF: string): Promise<Cliente | undefined> {
    return this.clienteRepository.findOne({
        where: {CPF: CPF}
    })
  } 

  async insert(data: CreateClienteDto): Promise<DtoResult>{
    const clienteFind = await this.findByCpf(data.CPF);

    if(!clienteFind){
      const cliente = new Cliente();
      cliente.nome = data.nome;
      cliente.endereco = data.endereco;
      cliente.localizacao = data.localizacao;
      cliente.email = data.email;
      cliente.senha = data.senha;
      cliente.CPF = data.CPF;
      const telefone  = new Telefone();
      telefone.telefone = data.telefone;
      cliente.telefones = [telefone];
      return this.clienteRepository.save(cliente)
        .then(() => {
          return <DtoResult>{
              status: true,
              message: "Cliente foi adicionado.",
          }
        })
        .catch((err) => {
          console.log(err)
          return <DtoResult>{
              status: false,
              message: "Cliente não foi adicionado.",
          }
        })
    }
    else {
      return <DtoResult>{
        status: false,
        message: "CPF já consta no banco de dados.",
      }
  }
  }
}
