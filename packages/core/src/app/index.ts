import { MicroServer } from '../server';
import { MongoDatabase } from '../mongo';
import { IApplication, IConfig } from '../typings';

export class MicroApp extends IApplication {
	protected readonly _server: MicroServer;
	protected readonly _database: MongoDatabase;
	constructor(config: IConfig) {
		super(config);
		this._server = MicroServer.getInstance(this._config);
		this._database = MongoDatabase.getInstance(this._config);
	}

	public start = async () => {
		await this._database.connect();
		await this._server.listen();
	};
}
