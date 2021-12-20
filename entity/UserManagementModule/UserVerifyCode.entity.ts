import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['userId'])
export class UserVerifyCode {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @ApiProperty()
    @Column({ comment: 'code type, support: reset-password' })
    type: string = "reset-password";

    @ApiProperty()
    @Column({ comment: '', type: 'bigint' })
    userId: number;

    @ApiProperty()
    @Column({ comment: 'code' })
    code: string = "";

    @ApiProperty()
    @Column({ comment: 'time when code generate', type: 'datetime' })
    time: Date;

}
export enum UserVerifyCodeType {
    ResetPassword = 'reset-password'
}