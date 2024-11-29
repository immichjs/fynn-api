import { UserConflictException } from '@common/exceptions/user-conflict.exception';
import { UserNotFoundException } from '@common/exceptions/user-not-found.exception';
import { CreateUserDTO } from '@core/user/dto/create-user.dto';
import { UpdateUserDTO } from '@core/user/dto/update-user.dto';
import { IUserRepository } from '@domain/interfaces/repositories/user.repository.interface';
import { User } from '@domain/entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';

export class UserRepository implements IUserRepository {
	@InjectRepository(User) private readonly userRepository: Repository<User>;

	public async create(data: CreateUserDTO): Promise<User> {
		const user = this.userRepository.create(data);
		return this.userRepository.save(user);
	}

	public async findById(id: string): Promise<User> {
		const user = await this.get({ id });

		if (!user) {
			throw new UserNotFoundException();
		}

		return user;
	}

	public async get(data: Partial<User>): Promise<User> {
		const user = await this.userRepository.findOne({
			where: data,
		});

		return user;
	}

	public async update(id: string, data: UpdateUserDTO): Promise<User> {
		const user = await this.findById(id);

		if (data.email) {
			const userAlreadyExistsWithEmail = await this.userRepository.findOne({
				where: {
					id: Not(id),
					email: data.email,
				},
			});

			if (userAlreadyExistsWithEmail) {
				throw new UserConflictException();
			}
		}

		Object.assign(user, data);

		return this.userRepository.save(user);
	}

	public async delete(id: string): Promise<void> {
		const user = await this.findById(id);
		user.removed = true;
		await this.userRepository.save(user);
	}
}
