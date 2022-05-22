import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { pedidoProviders } from './pedido.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [PedidoService],
  controllers: [PedidoController],
  providers: [...pedidoProviders,PedidoService]
})
export class PedidoModule {}
