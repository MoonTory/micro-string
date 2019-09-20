import path from 'path';

import { IController, IConfig } from '../typings';
import { parseDirFolderNames } from '@micro-string/common';

export const importAllControllers = async (config: IConfig): Promise<IController[]> => {
	try {
		const modules: string[] = await parseDirFolderNames('src/server/controllers/');

		const payload: IController[] = [];

		modules.forEach(controllerURI => {
			let prodPath = 'dist/';
			if (config.NODE_ENV === 'development') prodPath = 'src/';
			const dirPath: string = `${prodPath}/server/controllers/` + controllerURI;
			const resolvedPath: string = path.resolve(dirPath);
			const module = require(resolvedPath);
			const controller = new module.default(controllerURI, config);
			payload.push(controller);
		});

		return payload;
	} catch (error) {
		throw error;
	}
};

export const importController = (controllerUri: string) => {
	try {
		const controllerPath = path.resolve('src/server/controllers/', controllerUri);
		const cntrl = require(controllerPath);

		// console.log('cntrl', cntrl);

		const controller = new cntrl.default(controllerUri);

		return controller;
	} catch (error) {
		throw error;
	}
};
