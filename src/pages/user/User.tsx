import { Single } from "../../components";
import { singleUser } from "../../data";
import "./user.scss";

type Props = {};

const User = (props: Props) => {
	// fetch data and send to single component

	return (
		<div className="user">
			<Single {...singleUser} />
		</div>
	);
};

export default User;
