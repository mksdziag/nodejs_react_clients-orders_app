import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
	state = { isExpanded: false };

	toggleMobileNav = () => {
		this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
	};

	render() {
		const { isExpanded } = this.state;
		return (
			<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to="" className="navbar-item">
						AppLogo
					</Link>

					<span
						onClick={this.toggleMobileNav}
						role="button"
						className={`navbar-burger burger ${isExpanded && 'is-active'}`}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</span>
				</div>

				<div id="navbarBasicExample" className={`navbar-menu ${isExpanded && 'is-active'}`}>
					<div className="navbar-start" />

					<div className="navbar-end">
						<NavLink to="/orders" className="navbar-item" activeClassName="is-active">
							Orders
						</NavLink>
						<NavLink to="/clients" className="navbar-item" activeClassName="is-active">
							Clients
						</NavLink>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
