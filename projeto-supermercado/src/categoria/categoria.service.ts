import { Body, Inject, Injectable } from '@nestjs/common';
import { DtoResult } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @Inject("CATEGORIA_REPOSITORY")
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find()
  }

  async findId(id: number): Promise<Categoria | undefined> {
    return this.categoriaRepository.findOne({where: {idCategoria: id}});
  }

  async findByName(titulo: string): Promise<Categoria | undefined> {
    return this.categoriaRepository.findOne({
        where: {titulo: titulo}
    })
  } 

  async insert(data: CreateCategoriaDto): Promise<DtoResult>{
    const categoria = new Categoria();
    categoria.titulo = data.titulo;

    return this.categoriaRepository.save(categoria)
      .then(() => {
        return <DtoResult>{
            status: true,
            message: "Categoria foi adicionada",
        }
      })
      .catch((err) => {
        console.log(err)
        return <DtoResult>{
            status: false,
            message: "Categoria não foi adicionada",
        }
      })
  }

  async update(data: UpdateCategoriaDto): Promise<DtoResult> {
    const categoriaFind = await this.findByName(data.titulo);
    if (categoriaFind) {
        const categoria = new Categoria()
        categoria.titulo = categoriaFind.titulo;
        categoria.produtos = categoriaFind.produtos;
        categoria.produtos.push(data.produto);
        return this.categoriaRepository.update(categoria.idCategoria, categoria)
          .then(() => {
              return <DtoResult>{
                  status: true,
                  message: "Produto foi adicionado a categoria.",
              }
          })
          .catch((error) => {
              console.log(error)
              return <DtoResult>{
                  status: false,
                  message: "Produto não foi adicionado a categoria.",
              }
          })
    } else {
        return <DtoResult>{
            status: false,
            message: "Categoria não consta no banco de dados.",
        }
    }
}
}
