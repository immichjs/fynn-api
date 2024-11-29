import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from '@domain/entities/user';
import { IUserRepository } from '@domain/interfaces/repositories/user.repository.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserConflictException } from '@common/exceptions/user-conflict.exception';
import { CreateUserGoogleDTO } from './dto/create-user-google.dto';

@Injectable()
export class UserService {
	@Inject('IUserRepository')
	private readonly userRepository: IUserRepository;

	public async create(data: CreateUserDTO): Promise<User> {
		const userExistsWithEmail = await this.get({ email: data.email });
		if (userExistsWithEmail) {
			throw new UserConflictException();
		}

		return this.userRepository.create(data);
	}

	public async createWithGoogle(data: CreateUserGoogleDTO): Promise<User> {
		return this.userRepository.create(data);
	}

	public async findById(id: string): Promise<User> {
		const user = await this.get({ id });
		return user;
	}

	public async findByEmail(email: string): Promise<User> {
		const user = await this.get({ email });
		return user;
	}

	public async update(id: string, data: UpdateUserDTO): Promise<User> {
		return this.userRepository.update(id, data);
	}

	public async delete(id: string): Promise<void> {
		return this.userRepository.delete(id);
	}

	private async get(data: Partial<User>): Promise<User> {
		return this.userRepository.get(data);
	}
}
