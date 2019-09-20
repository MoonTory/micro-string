import { IConfig } from '../config';

export abstract class IDatabase {
	protected readonly _config: IConfig;

	constructor(config: IConfig) {
		this._config = config;
	}

	public abstract connect(): Promise<void | any>;
}
