import os from 'os';
import { stringModel } from '../../../../mongo';

import { EndpointFunction } from '../../../../typings';

export class Get extends EndpointFunction {
	constructor() {
		super([]);
	}

	protected async executeImpl(): Promise<void | any> {
		try {
			if (this.req.params.id) {
				const payload = await stringModel.findById(this.req.params.id).exec();
				if (payload) return this.ok({ payload, message: `Node - ${os.hostname()}` });
			}

			const strings = await stringModel.find().exec();
			return this.ok(strings);
		} catch (error) {
			this.next(error);
		}
	}
}
