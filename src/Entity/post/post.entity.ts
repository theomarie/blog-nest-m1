import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany, ManyToMany, CreateDateColumn } from 'typeorm';
import { AuthorEntity } from '../author/author.entity';
import { CommentEntity } from '../comment/comment.entity';
import { TagEntity } from '../tag/tag.entity';


@Entity('posts')
export class PostEntity {
    @PrimaryGeneratedColumn({name: 'post_id'})
    id: number;

    @Column()
    title: string;

    @Column({length: 50})
    subtitle: string;
   
    @Column()
    image: string;

    @Column({ type:'int', default: 0 })
    likes:number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(type => AuthorEntity, author => author.post)
    author: AuthorEntity;

    @OneToMany(type => CommentEntity, comment => comment.post, {onDelete: 'CASCADE'})
    comments: CommentEntity[];

    @ManyToMany(type => TagEntity, tag => tag.post)
    tags: TagEntity[];
}