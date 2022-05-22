import { PartialType } from '@nestjs/mapped-types';
import { CreateItemlistaDto } from './create-itemlista.dto';

export class UpdateItemlistaDto extends PartialType(CreateItemlistaDto) {}
