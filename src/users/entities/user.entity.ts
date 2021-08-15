import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({length:50, nullable:false})
    name: string;
    @Column()
    surname: string;
    @Column({default: true})
    active: boolean;
    @Column({ type: 'varchar', length: 70, nullable: false })
    password: string;
}
