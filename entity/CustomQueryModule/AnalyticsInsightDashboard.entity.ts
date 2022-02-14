import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnalyticsInsightDashboard {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'unique id of dashboard' })
    @Column({ comment: 'unique id of dashboard' })
    dashboard_id: string = "";

    @ApiProperty({ description: 'name of dashboard' })
    @Column({ comment: 'name of dashboard' })
    name: string = "";

    @ApiProperty({ description: 'type of dashboard, sample as : Moonbeam, Polkadot' })
    @Column({ comment: 'type of dashboard' })
    type: string = "";

    @ApiProperty({ default: '', description: 'description of dashboard' })
    @Column({ comment: 'description of dashboard' })
    description: string = "";

    @ApiProperty({ description: 'created user', default: 'Web3go Offical Team' })
    @Column({ comment: 'created user' })
    created: string = "Web3go Offical Team";

    @ApiProperty({
        description: 'created timestamp, as Date().getTime()'
    })
    @Column({
        type: 'bigint',
        comment: 'created timestamp'
    })
    created_timestamp: number = new Date().getTime();

    @ApiProperty({ default: '', description: 'tags customized for dashboard, sample as : "Featured,Polkadot,Moonbeam" ' })
    @Column({ comment: 'tags customized for dashboard, sample as : "Featured,Polkadot,Moonbeam" ' })
    tags: string = "";

    @ApiProperty({ default: '', description: 'icon of dashboard, sample as : https://images.xyz/icon.png' })
    @Column({ comment: 'icon of dashboard, sample as : https://images.xyz/icon.png' })
    icon: string = "";

    @ApiProperty({ default: '', description: 'image snapshot of dashboard, sample as : https://images.xyz/snapshot.png' })
    @Column({ comment: 'image snapshot of dashboard, sample as : https://images.xyz/snapshot.png' })
    snapshot: string = "";

    @ApiProperty({
        description: 'ext property as JSON format',
        default: ''
    })
    @Column({
        comment: 'ext property as JSON format',
        type: 'text'
    })
    ext_property: string = "";

}