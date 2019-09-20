import { IController, IConfig, EndpointMap } from '../../../typings';

export default class StringController extends IController {
	private readonly _endpoints: EndpointMap;

	constructor(path: string, config: IConfig) {
		super(path, config);
		this._endpoints = {};
		this.init();
	}

	public async init() {
		console.log(this._path + ' ' + 'Initialized successfully...');
	}
}
