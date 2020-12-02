import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import API_REQUEST from "../../services/ApiRequest/ApiRequest";
import { API_ENDPOINTS } from "../../services/ApiRequest/config/config";
import "./index.scss";
import Cookies from "js-cookie";

const Navbar = () => {
	const currentUser = useSelector((state) => state.current_user);

	const handleSignOut = async () => {
		if (Cookies.get("jwt_token")) {
			let response = await API_REQUEST.delete(
				API_ENDPOINTS["signout"],
				true,
				Cookies.get("jwt_token"),
			);
			Cookies.remove("jwt_token");
		}
	};

	const display = () => {
		if (currentUser) {
			return (
				<nav className="navbar navbar-expand-lg navbar-light">
					<Link to="/" className="navbar-brand" id="nav-brand" title="home">
						FormYou
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto mr-auto">
							<li className="nav-item">
								<Link to="/formations" className="nav-link">
									Les formations
								</Link>
							</li>

							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Nous contacter
								</Link>
							</li>
						</ul>

						<ul className="navbar-nav flex mr-5" id="nav-connect">
							<li className="nav-item">
								<Link to="/profile" className="nav-link">
									Mon Profil
								</Link>
							</li>

							<li className="nav-item">
								<a
									href="#"
									onClick={() => handleSignOut()}
									className="nav-link"
								>
									Se déconnecter
								</a>
							</li>
						</ul>
					</div>
				</nav>
			);
		} else {
			<nav className="navbar navbar-expand-lg navbar-light">
				<Link to="/" className="navbar-brand" id="nav-brand" title="home">
					FormYou
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto mr-auto">
						<li className="nav-item">
							<Link to="/formations" className="nav-link">
								Les formations
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/signup" className="nav-link">
								Nous rejoindre
							</Link>
						</li>

						<li></li>

						<li className="nav-item">
							<Link to="/contact" className="nav-link">
								Nous contacter
							</Link>
						</li>
					</ul>

					<ul className="navbar-nav flex mr-5" id="nav-connect">
						<li className="nav-item">
							<Link to="/signin" className="nav-link">
								Se connecter
							</Link>
						</li>
					</ul>
				</div>
			</nav>;
		}
	};
	return display();
};

export default Navbar;
