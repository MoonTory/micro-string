import { Router } from 'express';

import { IController, IConfig } from '../typings';
import { importAllControllers } from '../helpers/importAllControllers';

export class MicroAPI {
	private static _instance: MicroAPI;
	private readonly _config: IConfig;
	public router: Router;

	private constructor(config: IConfig) {
		this._config = config;
		this.config();
	}

	private async config() {
		this.router = Router();
		this.initialize(await importAllControllers(this._config));
	}

	private initialize(controllers: IController[]) {
		controllers.forEach((el: IController) => {
			this.router.use(el.path(), el.router);
		});
	}

	public static getInstance(config: IConfig): MicroAPI {
		if (!MicroAPI._instance) {
			MicroAPI._instance = new MicroAPI(config);
		}
		return MicroAPI._instance;
	}
}
