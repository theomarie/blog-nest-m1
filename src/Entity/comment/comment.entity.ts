import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
    
}


