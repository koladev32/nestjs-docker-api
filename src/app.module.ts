import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), MenusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
