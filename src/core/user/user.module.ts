import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@domain/entities/user';
import { UserRepository } from 'src/infrasctructure/persistence/user.repository';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [UserController],
	providers: [
		{ provide: 'IUserRepository', useClass: UserRepository },
		UserService,
	],
	exports: [UserService],
})
export class UserModule {}
