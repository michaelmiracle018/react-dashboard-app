import React from "react";
import "./topBox.scss";
import { topDealUsers } from "../../data";

type Props = {};

const TopBox = (props: Props) => {
	return (
		<div className="topBox">
			<h1>Top Deals</h1>

			<div className="list">
				{topDealUsers.map((user) => (
					<div className="listItem" key={user.id}>
						<div className="user">
							<img src={user.img} alt="image" />
							<div className="userText">
								<div className="username">{user.username}</div>
								<div className="email">{user.email}</div>
							</div>
						</div>
						<span className="amount">${user.amount}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopBox;
