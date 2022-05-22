import { Inject, Injectable } from '@nestjs/common';
import { Produto } from '../produto/produto.entity';
import { Repository } from 'typeorm';
import { DtoResult } from 'src/dto/result.dto';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { CategoriaService } from 'src/categoria/categoria.service';
import { Categoria } from 'src/categoria/categoria.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @Inject("PRODUTO_REPOSITORY")
    private produtoRepository: Repository<Produto>,
    private readonly categoriaRepository: CategoriaService,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find()
  }

  async findId(id: number): Promise<Produto | undefined> {
    return this.produtoRepository.findOne({where: {idProduto: id}});
  }

  async insert(data: CreateProdutoDto): Promise<DtoResult>{
    const produto = new Produto();
    produto.nome = data.nome;
    produto.marca = data.marca;
    produto.validade = data.validade;
    produto.fabricacao = data.fabricacao;
    produto.quantidade = data.quantidade;
    produto.preco = data.preco;
    const categoriaFind = await this.categoriaRepository.findByName(data.categoria);
    if(categoriaFind){
      produto.categorias = [categoriaFind];
    }
    else{
      const categoria = new Categoria();
      categoria.titulo = data.categoria;
      produto.categorias = [categoria];
    }

    return this.produtoRepository.save(produto)
      .then(() => {
        return <DtoResult>{
            status: true,
            message: "Produto foi adicionado.",
        }
      })
      .catch((err) => {
        console.log(err)
        return <DtoResult>{
            status: false,
            message: "Produto não foi adicionado.",
        }
      })
  }
}
