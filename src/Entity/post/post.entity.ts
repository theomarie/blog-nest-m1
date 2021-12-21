import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { AuthorEntity } from '../author/author.entity';

@Entity()
export class PostEntity {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50})
   title: string;

   @Column({length: 50})
   subtitle: string;
   
   @Column()
   image: string;

   @Column()
   date: Date;

//    @OneToOne(type => AuthorEntity, author => author.id)
//     balance: AuthorEntity;
}