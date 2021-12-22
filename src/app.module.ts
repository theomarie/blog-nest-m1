import { Get, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { AuthorEntity } from './Entity/author/author.entity';
import { CommentEntity } from './Entity/comment/comment.entity';
import { PostEntity } from './Entity/post/post.entity';
import { TagEntity } from './Entity/tag/tag.entity';

@Module({
  imports : [BlogModule, TypeOrmModule.forRoot({
    type: 'mysql',
       host: 'localhost',
       username: 'root',
       password: null,
       database: 'nestblog',
       entities: [AuthorEntity, CommentEntity, PostEntity, TagEntity],
       synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
