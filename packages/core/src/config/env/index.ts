export const {
	API_VERSION = process.env.API_VERSION || '1',
	APP_PORT = process.env.PORT || 5000,
	NODE_ENV = process.env.NODE_ENV || 'development',
	HOST_URL = process.env.HOST_URL || '',

	// Mongo Config
	DB_USER = process.env.DB_USER,
	DB_PASS = process.env.DB_PASS,
	DB_HOST = process.env.DB_HOST,
	DB_PORT = process.env.DB_PORT,
	DB_NAME = process.env.DB_NAME,
	DB_CONNECTION_STRING = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

	// Express Session Config
	// SESSION_NAME = process.env.SESSION_NAME || '',
	// SESSION_SECRET = process.env.SESSION_SECRET || '',
	// SESSION_LIFETIME = process.env.SESSION_LIFETIME || '',

	// Redis Config
	// REDIS_HOST = process.env.REDIS_HOST || '',
	// REDIS_PORT = process.env.REDIS_PORT || '',
	// REDIS_PASSWORD = process.env.REDIS_PASSWORD || '',
	// REDIS_DB_NAME = process.env.REDIS_DB_NAME || '',
	// REDIS_URL = `redis://:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`
} = process.env;
