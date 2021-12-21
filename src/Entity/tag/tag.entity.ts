<<<<<<< HEAD
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { PostEntity } from "../post/post.entity";
=======
import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import {PostEntity} from "../post/post.entity";
>>>>>>> b69b1a30fa0173915e6b1032715b5d8f74af4814

    @Entity()
    export class TagEntity {

<<<<<<< HEAD
@PrimaryGeneratedColumn()
id: number;
=======
        @PrimaryGeneratedColumn()
        id: number;
>>>>>>> b69b1a30fa0173915e6b1032715b5d8f74af4814

        @Column()
        name: string;

<<<<<<< HEAD
@ManyToMany(type => PostEntity, post => post.id)
post: PostEntity;
=======
        @ManyToMany(type => PostEntity, post => post.id)
        @JoinTable()

        post: PostEntity;

    }
>>>>>>> b69b1a30fa0173915e6b1032715b5d8f74af4814



