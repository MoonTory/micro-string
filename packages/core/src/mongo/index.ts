import mongoose from 'mongoose';
import { IDatabase, IConfig } from '../typings';

export class MongoDatabase extends IDatabase {
	private static _instance: MongoDatabase;
	private _connectionString: string;

	constructor(config: IConfig) {
		super(config);
	}

	public static getInstance(config: IConfig): MongoDatabase {
		if (!MongoDatabase._instance) {
			MongoDatabase._instance = new MongoDatabase(config);
			// ... any one time initialization goes here ...
			MongoDatabase._instance._connectionString = MongoDatabase._instance._config.DB_CONNECTION_STRING;
		}
		return MongoDatabase._instance;
	}

	public async connect(): Promise<void> {
		try {
			mongoose.connection.once('open', () => {
				console.log('MongoDB Connected...');
			});

			await mongoose.connect(this._connectionString, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
		} catch (error) {
			// Log Exception
			console.info('Retrying database connection in 10 seconds...');
			console.error(error);
			setTimeout(async () => {
				await MongoDatabase._instance.connect();
			}, 10000);
		}
	}
}
