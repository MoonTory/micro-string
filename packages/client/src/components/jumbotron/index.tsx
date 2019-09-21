import React, { FunctionComponent } from 'react';

import { useWindowDimensions } from '../../hooks';

interface Props {
	title?: string;
	subTitle?: string;
}

export const Jumbotron: FunctionComponent<Props> = ({ title, subTitle }) => {
	const { width } = useWindowDimensions();
	return (
		<section style={width < 968 ? { marginTop: '3rem' } : {}} className="hero is-primary is-medium has-text-centered">
			<div className="hero-body">
				<div className="container">
					{title ? <h1 className="title">{title}</h1> : null}
					{title ? <h2 className="subtitle">{subTitle}</h2> : null}
				</div>
			</div>
		</section>
	);
};
