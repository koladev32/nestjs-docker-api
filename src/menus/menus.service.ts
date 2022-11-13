import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu, MenuDocument } from './schemas/menu.schema';

@Injectable()
export class MenusService {
  constructor(
    @InjectModel(Menu.name) private readonly menuModel: Model<MenuDocument>,
  ) {}

  async create(createMenuDto: CreateMenuDto): Promise<MenuDocument> {
    const menu = new this.menuModel(createMenuDto);
    return menu.save();
  }

  async findAll(): Promise<MenuDocument[]> {
    return this.menuModel.find();
  }

  findOne(id: string) {
    return this.menuModel.findById(id);
  }

  async update(
    id: string,
    updateMenuDto: UpdateMenuDto,
  ): Promise<MenuDocument> {
    return this.menuModel.findByIdAndUpdate(id, updateMenuDto);
  }

  async remove(id: number) {
    return this.menuModel.findByIdAndRemove(id);
  }
}
