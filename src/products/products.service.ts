import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductsService {

  public constructor(
    @Inject('PRODUCT_REPOSITORY') 
    private product: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const date = new Date().toISOString();

    if(await this.findProductName(createProductDto.libelle)) {
      throw new BadRequestException('Vous avez déjà renseigné ce produit.')
    }

    await this.product.insert({
      ...createProductDto,
      createdAt: date, 
      updatedAt: date
    });

    return await this.findProductName(createProductDto.libelle);
  }

  async findAll():Promise<Record<string, any>> {
    const results = await this.product.find();
    return results.map(element => ({id: element.id, libelle: element.libelle }) )
  }

  async findOne(idParam: number) {
    const result = await this.product.findOne({where: { id: idParam }});
    if(!result) {
      throw new NotFoundException("Aucun produit n'a été trouvé.")
    }
    const { id, libelle } = result;
    return  { id, libelle };
  }

  async findProductName(libelleParam: string): Promise<Record<string, any>> {
    const result = await this.product.createQueryBuilder('p')
      .where('p.libelle LIKE :libelle', { libelleParam })
      .getOne();

    const { id, libelle } = result;

    return { id, libelle };
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.product.update ({ id }, updateProductDto)
    
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.product.delete({ id });
  }
}
