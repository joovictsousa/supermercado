import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { clienteProviders } from './cliente.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [ClienteService],
  controllers: [ClienteController],
  providers: [...clienteProviders,ClienteService]
})
export class ClienteModule {}
