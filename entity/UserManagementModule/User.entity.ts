import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'bigint' })
    userId: number;

    @ApiProperty()
    @Column({ comment: 'used for login, use email as loginName' })
    loginName: string = "";

    @ApiProperty()
    @Column({ comment: 'password with hash encrpt' })
    passwordHash: string = "";

    @ApiProperty()
    @Column({ comment: '' })
    displayName: string = "";

    @ApiProperty()
    @Column({ comment: '' })
    email: string = "";

    @ApiProperty()
    @Column({ comment: 'image converted as base64', type: 'text' })
    imageBase64: string = "";

    @ApiProperty()
    @Column({
        comment: 'user allow login status, default =1 , set to 0 when disabled.',
        type: 'int',
        default: 1
    })
    allowLogin: number = 1;

}