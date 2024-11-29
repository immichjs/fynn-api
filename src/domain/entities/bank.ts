import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Account } from './account';

@Entity('banks')
export class Bank {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ length: 3 })
	code: string;

	@Column()
	description: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
	updatedAt: Date;

	@Column({ type: 'bool', default: false })
	removed: boolean;

	// Relations
	@ManyToOne(() => Account, (account) => account.bank)
	accounts: Account[];
}
