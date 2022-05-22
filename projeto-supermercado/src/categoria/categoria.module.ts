import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { categoriaProviders } from './categoria.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [CategoriaService],
  controllers: [CategoriaController],
  providers: [...categoriaProviders,CategoriaService]
})
export class CategoriaModule {}
