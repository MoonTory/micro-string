import * as env from './env';
import { IConfig } from '../typings';

export const config: IConfig = {
	API_VERSION: env.API_VERSION,
	APP_PORT: env.APP_PORT,
	NODE_ENV: env.NODE_ENV,
	DB_CONNECTION_STRING: env.DB_CONNECTION_STRING,
	HOST_URL: env.HOST_URL
};
