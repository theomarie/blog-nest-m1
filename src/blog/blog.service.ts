import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentDto } from 'src/dtos/comment.dto';
import { PostDto } from 'src/dtos/post.dto';
import { PostEntity } from 'src/blog/entities/post/post.entity';
import { TagEntity } from 'src/blog/entities/tag/tag.entity';
import { Repository } from 'typeorm';
import { CommentEntity } from './entities/comment/comment.entity';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postsRepository: Repository<PostEntity>,
        @InjectRepository(CommentEntity)
        private readonly commentsRepository: Repository<CommentEntity>,
        @InjectRepository(TagEntity)
        private readonly tagsRepository: Repository<TagEntity>
    ){}

    getPosts(){
        return this.postsRepository.find({relations: ['comments']});
    }

    async getOnePost(postId: number){
        const post = await this.postsRepository.findOne(postId, {relations: ['comments']});
        if(post)
            return post;
        return null;
    }

    async createPost(postDto: PostDto){
        const post = await this.postsRepository.save(postDto);
        if(post)
            return post;
        return null;
    }

    async updatePost(postId: number, postDto: PostDto){
        const post = await this.postsRepository.findOne(postId);
        if(!post)
            return null;
        await this.postsRepository.update(postId, postDto);
        return await this.postsRepository.findOne(postId);
    }

    async removePost(postId: number){
        const post = await this.postsRepository.findOne(postId);
        if(!post)
            return null;
        this.postsRepository.remove(post);
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

    async incrementPointsComment(commentId, commentDto: CommentDto){
        const comment = await this.commentsRepository.findOne(commentId);
        Logger.log(comment);
        if(!comment)
            return null;
        comment.content = commentDto.content;
        comment.points = comment.points+1;
        return this.commentsRepository.save(comment);
    }

    async addTag(name:string){
        let tag = new TagEntity();
        tag.name = name;
        tag = await this.tagsRepository.save(tag);
        if(tag)
            return tag;
        return null;    
    }

    async tagArticle(postId, tagId){
        const post = await this.postsRepository.findOne(postId, {relations: ['tags']});
        if(!post)
            return null;
        const tag = await this.tagsRepository.findOne(tagId);
        if(!tag)
            return null;
        post.tags.push(tag);
        await this.postsRepository.save(post);
        return this.postsRepository.findOne(postId, {relations: ['tags', 'comments']});
    }   
}
