import os from 'os';
import { stringModel } from '../../../../mongo';

import { EndpointFunction } from '../../../../typings';

export class Delete extends EndpointFunction {
	constructor() {
		super([]);
	}

	protected async executeImpl(): Promise<void | any> {
		try {
			const op = await stringModel.findByIdAndDelete(this.req.params.id).exec();
			console.log('op', op);
			return this.ok({ payload: op, message: `Node - ${os.hostname()}` });
		} catch (error) {
			this.next(error);
		}
	}
}
