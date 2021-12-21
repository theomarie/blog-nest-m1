import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { AuthorEntity } from '../author/author.entity';
import { CommentEntity } from '../comment/comment.entity';
import { TagEntity } from '../tag/tag.entity';


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

   @ManyToOne(type => AuthorEntity, author => author.id)
    author: AuthorEntity;

    @ManyToOne(type => CommentEntity, comment => comment.id)
    comment: CommentEntity;

    @ManyToOne(type => TagEntity, tag => tag.id)
    tag: TagEntity;
}