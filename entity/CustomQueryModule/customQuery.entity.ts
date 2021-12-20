import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomQuery {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ comment: 'title of custom query' })
    title: string = "title";

    @ApiProperty()
    @Column({ comment: 'description of custom query' })
    description: string = "";

    @ApiProperty()
    @Column({ comment: 'created user' })
    created: string = "Dev User";

    @ApiProperty()
    @Column({
        type: 'bigint',
        comment: 'created timestamp'
    })
    createdTimestamp: number = new Date().getTime();

    @ApiProperty()
    @Column({
        comment: 'paramters for the custome query,string as JSON format',
        type: 'text'
    })
    params: string = "";



}