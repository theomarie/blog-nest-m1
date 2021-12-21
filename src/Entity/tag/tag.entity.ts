import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { PostEntity } from "../post/post.entity";

@Entity()
export class TagEntity {

@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@ManyToMany(type => PostEntity, post => post.id)
post: PostEntity;

}


