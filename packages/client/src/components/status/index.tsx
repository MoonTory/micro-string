import React, { FunctionComponent } from 'react';

interface Props {
	status: string;
	message: string;
}

export const Status: FunctionComponent<Props> = ({ status, message }) => {
	return (
		<article className="message is-success is-large">
			<div className="message-header">
				<p>Status Report</p>
			</div>
			<div className="message-body" style={{ height: '20vh' }}>
				<p>Status: {status}</p>
				<hr />
				<p>Service: {message}</p>
			</div>
		</article>
	);
};
