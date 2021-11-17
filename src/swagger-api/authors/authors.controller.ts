import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import {Author} from '../../graphql/models/author.model';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';
import {AuthorsServiceImpl} from '../../graphql/service/authors-impl/authors.serviceImpl';
import {Post as PostModel} from '../../graphql/models/post.model';
import {PostsImplService} from "../../graphql/service/posts-impl/posts-impl.service";
import {CreateAuthorInput} from "../../graphql/dto/input/create-author.input";
import { UpdateAuthorInput } from '../../graphql/dto/input/update-author.input';

@Controller('/authors')
export class AuthorsController {
    constructor(
        private readonly authorsImplService: AuthorsServiceImpl,
        private readonly postsImplService: PostsImplService
    ) {
    }

    @Get()
    @ApiOperation({summary: '获取全部作家'})
    @ApiResponse({
        status: 200,
        type: [Author],
    })
    getAuthors(): Author[] {
        return this.authorsImplService.authors;
    }

    @Get("/:id/posts")
    @ApiOperation({summary: '获取作家的归属文章'})
    @ApiResponse({
        status: 200,
        type: [PostModel],
    })
    getAuthorPost(@Param('id') id: string): PostModel[] {
        this._checkIsAuthor(id)

        return this.postsImplService.getPosts({ids: [id]})
    }

    @Post("/")
    @ApiOperation({summary: '创建一个作家'})
    @ApiResponse({
        type: Author
    })
    async createAuthor(@Body() createAuthorInput: CreateAuthorInput): Promise<Author> {
        return this.authorsImplService.createAuthor(createAuthorInput)
    }

    @Put("/:id")
    @Patch("/:id")
    @ApiOperation({summary: '更新作家'})
    @ApiResponse({ type: Author })
    updateAuthor(@Param('id') id: string, @Body() updateAuthorInput: UpdateAuthorInput): Author {
      this._checkIsAuthor(id)

      return this.authorsImplService.updateAuthor(updateAuthorInput)
    }

    @Delete("/:id")
    @ApiOperation({summary: '删除作家'})
    @ApiResponse({ type: Author })
    deleteAuthor(@Param('id') id: string): Author {
        this._checkIsAuthor(id)

        return this.authorsImplService.deleteAuthor({id})
    }

    private _checkIsAuthor(id: string): void {
        const author = this.authorsImplService.authors.find(author => author.id === id)
        if (!author) throw new NotFoundException('没有这个作家')
    }
}
