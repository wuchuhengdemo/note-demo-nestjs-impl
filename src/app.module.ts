import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlModule as LocalGraphqlModel } from './graphql/graphql.module';
import { SwaggerApiModule } from './swagger-api/swagger-api.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true
      }
    }),
    LocalGraphqlModel,
    SwaggerApiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
