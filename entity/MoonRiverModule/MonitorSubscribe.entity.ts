import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['target_address', 'subscribe_address'])
export class MonitorSubscribe {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ comment: 'refer to monitor_address.target_address', nullable: false })
    target_address: string;

    @ApiProperty()
    @Column({ comment: 'address who subcribe the target address', nullable: false, })
    subscribe_address: string;

    @ApiProperty()
    @Column({
        comment: 'email to receive the notification',
        nullable: false,
    })
    subscribe_email: string;


}