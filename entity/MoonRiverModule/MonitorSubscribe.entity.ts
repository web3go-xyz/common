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


    @ApiProperty()
    @Column({ comment: 'monitor target type. 1=Collator , 2=Delegator;', nullable: false, default: 1 })
    monitor_type: number;

    @ApiProperty()
    @Column({ comment: 'monitor rule. currently we only support: Collator Rank lower than the last 10% of max collators per round;', nullable: false, type: 'text', })
    monitor_rule: string;

    @ApiProperty()
    @Column({
        comment: 'last notify message',
        type: 'text',
        nullable: false,
    })
    last_notify_messsage: string;

    @ApiProperty()
    @Column({ comment: 'last notify time', type: 'datetime', nullable: false })
    last_notify_time: Date;

}