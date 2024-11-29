import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar', length: 128 })
	name: string;

	@Column({ type: 'varchar', unique: true })
	email: string;

	@Column({ type: 'varchar', nullable: true })
	password?: string;

	@Column({ type: 'varchar', nullable: true })
	picture: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
	updatedAt: Date;

	@Column({ type: 'bool', default: false })
	removed: boolean;
}
