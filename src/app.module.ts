import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlModule as LocalGraphqlModel } from './graphql/graphql.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LocalGraphqlModel
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
