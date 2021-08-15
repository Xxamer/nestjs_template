import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ){}

  create(createPostDto: CreatePostDto) {
    return this.postRepository.save(createPostDto);
  }

  findAll() {
    return this.postRepository.find()
  }

  findOne(id: number) {
    return this.postRepository.findOne(id)
  }

  update(id: number, updatedPost: UpdatePostDto) {
    return this.postRepository.save(updatedPost);
  }

  remove(id: number) {
    return this.postRepository.delete(id);
  }
}
