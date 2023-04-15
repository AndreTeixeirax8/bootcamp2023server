import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOne({ where: { id: id } });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const {
      title,
      description,
      imgUrl1,
      imgUrl2,
      price,
      quantity,
      size,
      color,
      shippings,
      sex,
      brands,
      category,
    } = updateProductDto;

    const findProduct = await this.productRepository.findOne({
      where: { id: id },
    });
    if (!findProduct) {
      throw new BadRequestException('produto  não encotrado');
    }
    let updateProduct: any = {};

    title && (updateProduct.title = title);
    description && (updateProduct.description = description);
    imgUrl1 && (updateProduct.imgUrl1 = imgUrl1);
    imgUrl2 && (updateProduct.imgUrl2 = imgUrl2);
    price && (updateProduct.price = price);
    quantity && (updateProduct.quantity = quantity);
    size && (updateProduct.size = size);
    color && (updateProduct.color = color);
    shippings && (updateProduct.shippings = shippings);
    sex && (updateProduct.sex = sex);
    brands && (updateProduct.brands = brands);
    category && (updateProduct.category = category);

    await this.productRepository.update({ id: id }, updateProduct);
    const findProductAgain = await this.productRepository.findOne({
      where: { id: id },
    });

    return findProductAgain;
  }

  async remove(id: string) {
    const produto = await this.productRepository.findOne({ where: { id: id } });

    if (!produto) {
      throw new BadRequestException('cliente não encotrado');
    }
    return await this.productRepository.delete(id);
  }
}
