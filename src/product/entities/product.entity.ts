import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  imgUrl1: string;

  @Column({ nullable: true })
  imgUrl2: string;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  size: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  shippings: string;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  brands: string;

  @Column({ nullable: true })
  category: string;
}
