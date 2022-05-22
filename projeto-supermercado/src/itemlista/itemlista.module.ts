import { Module } from '@nestjs/common';
import { ItemlistaService } from './itemlista.service';
import { ItemlistaController } from './itemlista.controller';
import { itemListaProviders } from './itemlista.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [ItemlistaService],
  controllers: [ItemlistaController],
  providers: [...itemListaProviders,ItemlistaService]
})
export class ItemlistaModule {}
