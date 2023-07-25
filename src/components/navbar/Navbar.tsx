import React from "react";
import "./navbar.scss";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src="logo.svg" alt="" />
				<span>Mirade</span>
			</div>
			<div className="icons">
				<img src="/search.svg" alt="search" className="icon" />
				<img src="/app.svg" alt="app" className="icon" />
				<img src="/expand.svg" alt="expand" className="icon" />
				<div className="notifications">
					<img src="/notifications.svg" alt="notification" className="" />
					<span>1</span>
				</div>
				<div className="user">
					<img
						src="https://yt3.ggpht.com/5FX7Bcc2Ox2OCEjSjkjXXUaJnvpG0QWJhnGFOimuRN-QbLM33fo1ObZ_LCQWf4mc683LAz2A3A=s108-c-k-c0x00ffffff-no-rj"
						alt=""
					/>{" "}
					<span>miracle</span>
				</div>
				<img src="/setting.svg" alt="setting" className="icon" />
			</div>
		</div>
	);
};

export default Navbar;
