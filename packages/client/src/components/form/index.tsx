import React, { FunctionComponent, useState, useEffect } from 'react';

import axios from '../../config/axios';
import { AxiosResponse } from 'axios';

interface Props {
	savedString: string;
	setResponse: React.Dispatch<React.SetStateAction<AxiosResponse<any> | undefined>>;
	setSavedString: React.Dispatch<React.SetStateAction<string>>;
}

export const Form: FunctionComponent<Props> = ({ savedString, setResponse, setSavedString }) => {
	const [string, setString] = useState(savedString);

	useEffect(() => {
		setString(savedString);
	}, [savedString]);

	const handleClick = async () => {
		const res = await axios.patch('/string/5d85bd9074d55a30dc4de448', { string });
		console.log('res', res);
		setResponse(res);
		setSavedString(res.data.payload.string);
	};

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setString(e.currentTarget.value);
	};

	return (
		<article className="message is-dark is-large">
			<div className="message-header">
				<p>String Form - {savedString}</p>
			</div>
			<div className="message-body" style={{ height: '20vh' }}>
				<div className="container">
					<div className="field">
						<label className="label">String armazenada</label>
						<div className="control">
							<input className="input" type="text" value={string} onChange={handleChange} />
						</div>
					</div>
					<div className="field">
						<button onClick={handleClick} className="button is-dark is-pulled-right">
							Atualizar
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};
