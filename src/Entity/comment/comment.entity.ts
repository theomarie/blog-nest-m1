import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, CreateDateColumn } from "typeorm";
import { AuthorEntity } from "../author/author.entity";
import { PostEntity } from "../post/post.entity";
import { TagEntity } from "../tag/tag.entity";

@Entity('comments')
export class CommentEntity {

    @PrimaryGeneratedColumn({name: 'comment_id'})
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    content: string;

    @Column({ type:'int', default: 0 })
    likes:number;
    
    @ManyToOne(type => AuthorEntity, author => author.comment)
    author: AuthorEntity;

    @OneToMany(type => PostEntity, post => post.comments)
    post: PostEntity;
}


