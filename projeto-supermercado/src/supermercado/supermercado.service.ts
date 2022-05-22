import { Inject, Injectable } from '@nestjs/common';
import { DtoResult } from 'src/dto/result.dto';
import { Telefone } from 'src/telefone/telefone.entity';
import { Repository } from 'typeorm';
import { CreateSupermercadoDto } from './dto/create-supermercado.dto';
import { UpdateSupermercadoDto } from './dto/update-supermercado.dto';
import { Supermercado } from './supermercado.entity';

@Injectable()
export class SupermercadoService {
  constructor(
    @Inject("SUPERMERCADO_REPOSITORY")
    private supermercadoRepository: Repository<Supermercado>,
  ) {}

  async findAll(): Promise<Supermercado[]> {
    return this.supermercadoRepository.find()
  }

  async findId(id: number): Promise<Supermercado | undefined> {
    return this.supermercadoRepository.findOne({where: {idConta: id}});
  }

  async findByCpf(CNPJ: string): Promise<Supermercado | undefined> {
    return this.supermercadoRepository.findOne({
        where: {CNPJ: CNPJ}
    })
  } 

  async insert(data: CreateSupermercadoDto): Promise<DtoResult>{
    const supermercadoFind = await this.findByCpf(data.CNPJ);

    if(!supermercadoFind){
      const supermercado = new Supermercado();
      supermercado.nome = data.nome;
      supermercado.endereco = data.endereco;
      supermercado.localizacao = data.localizacao;
      supermercado.email = data.email;
      supermercado.senha = data.senha;
      supermercado.CNPJ = data.CNPJ;
      supermercado.funcionamento = data.funcionamento;
      const telefone  = new Telefone();
      telefone.telefone = data.telefone;
      supermercado.telefones = [telefone];
      return this.supermercadoRepository.save(supermercado)
        .then(() => {
          return <DtoResult>{
              status: true,
              message: "Supermercado foi adicionado",
          }
        })
        .catch((err) => {
          console.log(err)
          return <DtoResult>{
              status: false,
              message: "Supermercado não foi adicionado",
          }
        })
    }
    else {
      return <DtoResult>{
        status: false,
        message: "CNPJ já consta no banco de dados",
      }
  }
  }
}
