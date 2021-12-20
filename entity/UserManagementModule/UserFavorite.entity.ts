import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['userId'])
export class UserFavorite {

    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @ApiProperty()
    @Column({ comment: '', type: 'bigint' })
    userId: number;

    @ApiProperty({ description: 'card board type support:  [ FeaturedBoard,  CustomBoard] ;收藏的数据看板的类型， FeaturedBoard=系统提供的看板，CustomBoard=自定义看板' })
    @Column({ comment: 'card board type support:  [ FeaturedBoard,  CustomBoard] ' })
    type: string = "";//收藏的数据看板的类型， FeaturedBoard=系统提供的看板，CustomBoard=自定义看板

    @ApiProperty({ description: 'featured board name when type = FeaturedBoard; custom query id when type=CustomBoard;当type=FeaturedBoard系统提供的看板时，这里放的是系统看板的名字； 当type=CustomBoard自定义看板时， 这里放的是自定义看板的编号' })
    @Column({ comment: 'featured board name when type = FeaturedBoard; custom query id when type=CustomBoard;' })
    link: string = "";//当type=FeaturedBoard系统提供的看板时，这里放的是系统看板的名字； 当type=CustomBoard自定义看板时， 这里放的是自定义看板的编号

    @ApiProperty({ description: 'featured board name when type = FeaturedBoard; custom query id when type=CustomBoard;当type=FeaturedBoard系统提供的看板时，这里放的是系统看板的访问地址； 当type=CustomBoard自定义看板时， 这里放的是自定义看板的访问地址' })
    @Column({ nullable: false, type: 'text', comment: 'featured board name when type = FeaturedBoard; custom query id when type=CustomBoard;' })
    linkUrl: string = "";//当type=FeaturedBoard系统提供的看板时，这里放的是系统看板的访问地址； 当type=CustomBoard自定义看板时， 这里放的是自定义看板的访问地址

    @ApiProperty({ description: 'time when added to favorite' })
    @Column({ comment: 'time when added to favorite', type: 'datetime' })
    time: Date;
}

export enum UserFavoriteType {
    FeaturedBoard = 'FeaturedBoard',
    CustomBoard = 'CustomBoard'
}