<<<<<<< HEAD
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
=======
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
>>>>>>> 67ab61dfa7981a8794820b29c0bb09d041c72df7

@Entity()
export class TagEntity {

<<<<<<< HEAD
   
}
=======
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;


}


>>>>>>> 67ab61dfa7981a8794820b29c0bb09d041c72df7
