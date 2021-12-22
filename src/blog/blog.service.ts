import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentDto } from 'src/dtos/comment.dto';
import { PostDto } from 'src/dtos/post.dto';
import { CommentEntity } from 'src/Entity/comment/comment.entity';
import { PostEntity } from 'src/Entity/post/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postsRepository: Repository<PostEntity>,
        @InjectRepository(CommentEntity)
        private readonly commentsRepository: Repository<CommentEntity>
    ){}

    getPosts(){
        return this.postsRepository.find({relations: ['comments']});
    }

    async getOnePost(postId: number){
        const post = await this.postsRepository.findOne(postId);
        if(post)
            return post;
        return null;
    }

    async createPost(postDto: PostDto){
        const post = await this.postsRepository.save(postDto);
        return post;
    }

    async addComment(postID, commentDto: CommentDto){
        const post = await this.postsRepository.findOne(postID, {relations: ['comments']});
        if(!post)
            return null;
        const comment = new CommentEntity();
        comment.content = commentDto.content;
        comment.post = post
        return this.commentsRepository.save(comment);
    }
}
