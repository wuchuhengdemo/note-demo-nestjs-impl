/**
 *  作者id是否存在
 */
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { AuthorsServiceImpl } from '../service/authors-impl/authors.serviceImpl';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({  async: false })
@Injectable()
export class IsAuthorAlreadyExists implements  ValidatorConstraintInterface{
  constructor(private authorsImplService: AuthorsServiceImpl) { }
  validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
    if (typeof value === 'string') {
      const index = this.authorsImplService.authors.findIndex(author => author.id === value)
      return index !== -1;
    } else {
      return false
    }
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return '作者id:$value不存在'
  }
}