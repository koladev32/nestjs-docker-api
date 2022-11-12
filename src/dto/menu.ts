import { PartialType } from '@nestjs/mapped-types';
import { Menu } from '../entities/menu';

export class CreateMenuDto extends Menu {}
export class UpdateMenuDto extends PartialType(CreateMenuDto) {}
