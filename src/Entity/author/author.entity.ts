import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';
import { PostEntity } from '../post/post.entity';

@Entity()
export class AuthorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @Column({ length: 25 })
    email:string;
    
    @OneToMany(type => PostEntity, post => post.id)
    post: PostEntity;

    @OneToMany(type => CommentEntity, comment => comment.id)
    comment: CommentEntity;
 
}