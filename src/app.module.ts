import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [PostsModule,
  TypeOrmModule.forRoot({...ormconfig,
    keepConnectionAlive:true,
    autoLoadEntities: true,
  }),
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
