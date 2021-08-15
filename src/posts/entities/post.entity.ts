import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title: string;
    @Column({default: true})
    isVisible: boolean;

    constructor(id: number, title: string, isVisible:boolean) {
        this.id = id;
        this.title = title;
        this.isVisible = isVisible;
        console.log('Creo User Entity para ' + this.title);
    }
}
