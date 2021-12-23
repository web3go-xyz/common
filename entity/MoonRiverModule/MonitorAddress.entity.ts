import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['target_address'])
export class MonitorAddress {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ comment: 'target address, collator address / delegator address', nullable: false })
    target_address: string;

    @ApiProperty()
    @Column({ comment: 'monitor target type. 1=Collator , 2=Delegator;', nullable: false, default: 1 })
    monitor_type: number;

    @ApiProperty()
    @Column({ comment: 'monitor rule. 1=Collator Rank Out of Max;', nullable: false, default: 1 })
    monitor_rule: number;

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