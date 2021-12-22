import { Body, Controller, Get, HttpException, HttpStatus, Logger, Param, Patch, Post } from '@nestjs/common';
import { CommentDto } from 'src/dtos/comment.dto';
import { PostDto } from 'src/dtos/post.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService){}

    @Get()
    getAll(){
      return this.blogService.getPosts();
    }

    @Get(':postId')
    async getOne(@Param('postId') postId){
        const post = await this.blogService.getOnePost(postId);
        if(post)
            return post;
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    @Post()
    async createPost(@Body() postDto: PostDto){
        const post = await this.blogService.createPost(postDto);
        Logger.log(postDto);
        if(post)
            return post;
        throw new HttpException('Not Created', HttpStatus.NOT_MODIFIED);
    }

    @Post('comment/:postId')
    async addComment(@Param(':postId') postId, @Body() commentDto: CommentDto){
        const comment = await this.blogService.addComment(postId, commentDto);
        if(comment)
            return comment;
        throw new HttpException('Not modified', HttpStatus.NOT_MODIFIED);
    }

    @Post('tag/:tagName')
    async addTag(@Param(':tagName') tagName){
        const tag = await this.blogService.addTag(tagName);
        if(tag)
            return tag;
        throw new HttpException('Not modified', HttpStatus.NOT_MODIFIED);
    }

    @Patch(':postId/tag/:tagId')
    async tagArticle(@Param('postId') postId: number, @Param('tagId') tagId: number){
        const post = await this.blogService.tagArticle(postId, tagId);
        if(post)
            return post;
        throw new HttpException('Not modified', HttpStatus.NOT_MODIFIED);
    }

}
