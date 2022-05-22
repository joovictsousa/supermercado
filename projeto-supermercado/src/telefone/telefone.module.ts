import { Module } from '@nestjs/common';
import { TelefoneService } from './telefone.service';
import { TelefoneController } from './telefone.controller';
import { telefoneProviders } from './telefone.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [TelefoneService],
  controllers: [TelefoneController],
  providers: [...telefoneProviders,TelefoneService]
})
export class TelefoneModule {}
