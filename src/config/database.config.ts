import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
	host: process.env.POSTGRES_HOST || 'localhost',
	port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
	username: process.env.POSTGRES_USERNAME,
	password: process.env.POSTGRES_PASSWORD,
	name: process.env.POSTGRES_NAME,
}));
