import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { produtoProviders } from './produto.providers';
import { DatabaseModule } from 'src/database/database.module';
import { CategoriaModule } from 'src/categoria/categoria.module';

@Module({
  imports: [DatabaseModule, CategoriaModule],
  exports: [ProdutoService],
  controllers: [ProdutoController],
  providers: [...produtoProviders,ProdutoService]
})
export class ProdutoModule {}
