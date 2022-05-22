import { Module } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CartaoController } from './cartao.controller';
import { cartaoProviders } from './cartao.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ClienteModule } from 'src/cliente/cliente.module';
import { clienteProviders } from 'src/cliente/cliente.providers';
import { ClienteService } from 'src/cliente/cliente.service';

@Module({
  imports: [DatabaseModule, ClienteModule],
  exports: [CartaoService],
  controllers: [CartaoController],
  providers: [...cartaoProviders,CartaoService, ...clienteProviders, ClienteService]
})
export class CartaoModule {}
