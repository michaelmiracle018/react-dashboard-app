import React from "react";
import "./home.scss";
import {
	BarChartBox,
	BigChartBox,
	ChatBox,
	PieChartBox,
	TopBox,
} from "../../components";
import {
	barChartBoxRevenue,
	barChartBoxVisit,
	chartBoxConversion,
	chartBoxProduct,
	chartBoxRevenue,
	chartBoxUser,
} from "../../data";

type Props = {};

const Home = (props: Props) => {
	return (
		<div className="home">
			<div className="box box1">
				<TopBox />
			</div>
			<div className="box box2">
				<ChatBox {...chartBoxUser} />
			</div>
			<div className="box box3">
				<ChatBox {...chartBoxProduct} />
			</div>
			<div className="box box4">
				<PieChartBox />
			</div>
			<div className="box box5">
				<ChatBox {...chartBoxRevenue} />
			</div>
			<div className="box box6">
				<ChatBox {...chartBoxConversion} />
			</div>
			<div className="box box7">
				<BigChartBox />
			</div>
			<div className="box box8">
				<BarChartBox {...barChartBoxVisit} />
			</div>
			<div className="box box9">
				<BarChartBox {...barChartBoxRevenue} />
			</div>
		</div>
	);
};

export default Home;
