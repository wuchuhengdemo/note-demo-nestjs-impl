import { Controller, Get } from '@nestjs/common';
import { Author } from '../../graphql/models/author.model';
import { ApiResponse } from '@nestjs/swagger';
import { AuthorsServiceImpl } from '../../graphql/service/authors-impl/authors.serviceImpl';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsImplService: AuthorsServiceImpl) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: '获取全部作家',
    type: [Author],
  })
  getAuthors(): Author[] {
    return this.authorsImplService.authors;
  }

}
