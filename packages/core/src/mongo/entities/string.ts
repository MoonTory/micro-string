import { Schema, Model, model, Document } from 'mongoose';

export interface IStringModel extends Document {}

const IStringSchema = new Schema(
	{
		string: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

export const stringModel: Model<IStringModel> = model<IStringModel>('Archive', IStringSchema);
