import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Bank } from './bank';

@Entity('accounts')
export class Account {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	description: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
	updatedAt: Date;

	@Column({ type: 'bool', default: false })
	removed: boolean;

	@OneToMany(() => Bank, (bank) => bank.accounts)
	bank: Bank;
}
