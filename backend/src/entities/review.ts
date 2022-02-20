import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment: string;

    @Column()
    stars: number;

    // @ts-ignore
    @ManyToOne(() => Product, product => product.reviews)
    product: Product;

}
