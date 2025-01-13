import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productProviders } from './product.providers';
import { DatabaseModule } from 'src/services/database/database.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ...productProviders],
  imports: [DatabaseModule]
})
export class ProductsModule {}
