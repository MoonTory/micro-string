import React, { FunctionComponent } from 'react';

import githubLogo from '../assets/Github_logo.svg';

interface Props {}

export const Footer: FunctionComponent<Props> = () => {
	const defaultMargin = { margin: '0 1rem 0 1rem' };

	return (
		<footer className="container has-background-dark is-fluid is-marginless has-text-white">
			<div className="columns has-text-centered">
				<div className="column">
					<h1 className="is-size-4 has-text-primary">NodeJs</h1>
				</div>
				<div className="column">
					<h1 className="is-size-4 has-text-primary">MongoDB</h1>
				</div>
				<div className="column">
					<h1 className="is-size-4 has-text-primary">ReactJs</h1>
				</div>
				<div className="column">
					<h1 className="is-size-4 has-text-primary">Nginx</h1>
				</div>
			</div>
			<div className="columns has-background-primary">
				<div className="column has-text-centered is-paddingless is-size-5" style={defaultMargin}>
					&copy; gustavoquinta • {new Date().getFullYear()} • Open sourced on{' '}
					<a href="https://github.com/MoonTory">
						<i className="fab fa-github has-text-dark" />
						{/* <img height="16px" width="16px" src={githubLogo} alt="GatsbyJs" /> */}
					</a>{' '}
				</div>
			</div>
		</footer>
	);
};
