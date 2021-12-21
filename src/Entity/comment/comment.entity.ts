import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { AuthorEntity } from "../author/author.entity";
import { PostEntity } from "../post/post.entity";
import { TagEntity } from "../tag/tag.entity";

@Entity()
export class CommentEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    content: string;

    @Column()
    point: number;
    
    @ManyToOne(type => AuthorEntity, author => author.id)
    author: AuthorEntity;

    @OneToMany(type => PostEntity, post => post.id)
    post: PostEntity;
}


