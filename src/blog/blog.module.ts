import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from 'src/Entity/comment/comment.entity';
import { PostEntity } from 'src/Entity/post/post.entity';
import { TagEntity } from 'src/Entity/tag/tag.entity';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity, CommentEntity, TagEntity])
  ],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
