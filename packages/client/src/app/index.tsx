import React, { FunctionComponent, useEffect, useState } from 'react';

import { MainLayout } from '../templates';
import { Jumbotron, Form, Status } from '../components';

import axios from '../config/axios';
import { AxiosResponse } from 'axios';

interface Props {}

export const App: FunctionComponent<Props> = () => {
	const [response, setResponse] = useState<AxiosResponse<any>>();
	const [string, setString] = useState('');
	const [id, setId] = useState('');

	useEffect(() => {
		async function Fetch() {
			const res = await axios.get('/string', {});
			setResponse(res);
			setString(res.data.payload[0].string);
			setId(res.data.payload[0]._id);
		}
		Fetch();
	}, []);

	return (
		<MainLayout>
			<Jumbotron title="Micro-String" subTitle="String manipulation demo utilizing a micro-service architecture." />
			<section className="section" style={{ height: '60vh' }}>
				<div className="container" style={{ marginTop: '4rem' }}>
					<div className="columns">
						<div className="column">
							<Form id={id} savedString={string} setSavedString={setString} setResponse={setResponse} />
						</div>
						<div className="column">
							<Status status={response ? response.status.toString() : ''} message={response ? response.data.message : ''} />
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};
