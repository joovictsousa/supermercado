import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContaModule } from './conta/conta.module';
import { TelefoneModule } from './telefone/telefone.module';
import { PedidoModule } from './pedido/pedido.module';
import { ClienteModule } from './cliente/cliente.module';
import { SupermercadoModule } from './supermercado/supermercado.module';
import { ProdutoModule } from './produto/produto.module';
import { ItemlistaModule } from './itemlista/itemlista.module';
import { CartaoModule } from './cartao/cartao.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [ContaModule, TelefoneModule, PedidoModule, ClienteModule, SupermercadoModule, ProdutoModule, ItemlistaModule, CartaoModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
