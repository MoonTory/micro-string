import os from 'os';
import { stringModel } from '../../../../mongo';

import { EndpointFunction } from '../../../../typings';

export class Update extends EndpointFunction {
	constructor() {
		super([]);
	}

	protected async executeImpl(): Promise<void | any> {
		try {
			const data = this.req.body;
			stringModel.findByIdAndUpdate(this.req.params.id, data, { new: true }, (err, res) => {
				if (err) return this.fail(err);

				return this.res.status(201).json({ payload: res, message: `Node - ${os.hostname()}` });
			});
		} catch (error) {
			this.next(error);
		}
	}
}
