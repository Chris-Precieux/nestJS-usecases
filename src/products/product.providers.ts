import { DataSource } from "typeorm";
import { Product } from "./entities/product.entity";

export const productProviders = [
    {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: (datasource: DataSource) => datasource.getRepository(Product),
        inject: ['DATA_SOURCE']
    }
];