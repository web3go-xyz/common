import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['user_id'])
export class UserAddressBundle {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @ApiProperty()
    @Column({ comment: '' })
    user_id: number;

    @ApiProperty()
    @Column({ comment: '' })
    address_type: string = "";

    @ApiProperty()
    @Column({ comment: '' })
    address: string = "";

    @ApiProperty()
    @Column({ comment: '', default: '2022-01-01' })
    bundle_created_time: Date;
}