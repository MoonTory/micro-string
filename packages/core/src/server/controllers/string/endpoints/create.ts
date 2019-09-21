import { stringModel } from '../../../../mongo';
import { EndpointFunction } from '../../../../typings';

export class Create extends EndpointFunction {
	constructor() {
		super([]);
	}

	protected async executeImpl(): Promise<void | any> {
		try {
			const string = new stringModel(this.req.body);
			string.save((err, res) => {
				if (err) return this.fail(err);

				console.log('res', res);
				return this.ok({ message: res });
			});
		} catch (error) {
			this.next(error);
		}
	}
}
