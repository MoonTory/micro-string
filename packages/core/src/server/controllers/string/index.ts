import { StringEndpoints } from './endpoints';
import { IController, IConfig, EndpointMap } from '../../../typings';

export default class StringController extends IController {
	private readonly _endpoints: EndpointMap;

	constructor(path: string, config: IConfig) {
		super(path, config);
		this._endpoints = {
			get: new StringEndpoints.Get(),
			create: new StringEndpoints.Create(),
			update: new StringEndpoints.Update(),
			delete: new StringEndpoints.Delete()
		};
		this.init();
	}

	public async init() {
		this.router.get('/', ...this._endpoints['get'].middlewares, this._endpoints['get'].execute());
		this.router.get('/:id', ...this._endpoints['get'].middlewares, this._endpoints['get'].execute());
		this.router.post('/', ...this._endpoints['create'].middlewares, this._endpoints['create'].execute());
		this.router.patch('/:id', ...this._endpoints['update'].middlewares, this._endpoints['update'].execute());
		this.router.delete('/:id', ...this._endpoints['delete'].middlewares, this._endpoints['delete'].execute());
		console.log(this._path + ' ' + 'Initialized successfully...');
	}
}
