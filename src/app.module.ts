import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './services/database/database.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports:[ProductsModule],
})
export class AppModule {}
  