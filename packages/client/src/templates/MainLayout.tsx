import React, { FunctionComponent, PropsWithChildren, Fragment } from 'react';

import { Navbar, Footer } from '../components';

interface Props {}

export const MainLayout: FunctionComponent<PropsWithChildren<Props>> = ({ children, ...props }) => {
	return (
		<Fragment>
			<Navbar {...props} />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};
