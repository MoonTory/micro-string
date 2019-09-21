/**
 * Node_Module dependencies.
 */
import express, { urlencoded, json } from 'express';
// import compression from 'compression';
// import morgan from 'morgan';
// import helmet from 'helmet';
import cors from 'cors';
// import cookieParser from 'cookie-parser';

// Middlewares
import { ErrorHandler, getHostname } from './middleware';

import { MicroHTTP } from './http';
import { MicroAPI } from './api';
import { IServer, IConfig } from '../typings';

export class MicroServer extends IServer {
	private static _instance: MicroServer;
	private _http: MicroHTTP;
	private _api: MicroAPI;
	private _express: express.Application;

	private constructor(config: IConfig) {
		super(config);
		this._express = express();
		this._express.set('port', this._config.APP_PORT);
		this._api = MicroAPI.getInstance(this._config);
		this._http = MicroHTTP.getInstance(this._config.APP_PORT, this._express);
		this.config();
	}

	public static getInstance(config: IConfig): MicroServer {
		if (!MicroServer._instance) {
			MicroServer._instance = new MicroServer(config);
			// ... any one time initialization goes here ...
		}
		return MicroServer._instance;
	}

	public async listen() {
		await this._http.listen(this._http.port(), () => console.log(`Server start @ http://localhost:${this._http.port()} ...`));
	}

	protected async config() {
		this._express.use(cors());
		// this._express.use(helmet());
		// this._express.use(compression());
		this._express.use(json());
		this._express.use(urlencoded({ extended: false }));
		// this._express.use(cookieParser());
		// this._express.use(morgan(this._config.NODE_ENV === 'development' ? 'dev' : 'dev'));
		this._express.use('/hit', getHostname());
		this._express.use(this._api.router);
		this._express.use(ErrorHandler);
	}
}
