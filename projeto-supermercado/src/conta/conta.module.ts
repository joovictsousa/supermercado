import { Module } from '@nestjs/common';
import { ContaService } from './conta.service';
import { ContaController } from './conta.controller';
import { contaProviders } from './conta.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [ContaService],
  controllers: [ContaController],
  providers: [...contaProviders,ContaService]
})
export class ContaModule {}
