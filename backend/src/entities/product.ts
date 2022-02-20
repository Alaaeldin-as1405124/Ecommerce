import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Review} from "./review";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column({type:'real'})
    price: string;

    // @ts-ignore
    @OneToMany(() => Review, review => review.product, {
        cascade: true
    })
    reviews: Review[];

}
