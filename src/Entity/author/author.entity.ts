import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuthorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @Column({ length: 25 })
    email:string;

 
}