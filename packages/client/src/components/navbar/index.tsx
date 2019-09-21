import React, { FunctionComponent, useState } from 'react';

import { useNavbarScroll } from './useNavbarScroll';
import logo from '../../assets/logo.svg';
import './scss/header.scss';

interface Props {}

export const Navbar: FunctionComponent<Props> = () => {
	const navElRef = useNavbarScroll();
	const [isActive, setIsActive] = useState(false);

	return (
		<nav ref={navElRef} className="navbar is-dark is-fixed-top">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item" href="#">
						{/* <img src={logo} className="logo"  /> */}
						<h1 className="has-text-primary">Micro-String</h1>
					</a>
					<div className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} onClick={() => setIsActive(!isActive)}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
					<div className="navbar-end"></div>
				</div>
			</div>
		</nav>
	);
};
