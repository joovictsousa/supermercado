import { Module } from '@nestjs/common';
import { SupermercadoService } from './supermercado.service';
import { SupermercadoController } from './supermercado.controller';
import { supermercadoProviders } from './supermercado.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [SupermercadoService],
  controllers: [SupermercadoController],
  providers: [...supermercadoProviders,SupermercadoService]
})
export class SupermercadoModule {}
