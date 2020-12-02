import React from "react";
import TickIcon from "../../../assets/icons/acc-den-tick.svg";
import TrashIcon from "../../../assets/icons/trash.svg";

const UserDashboard = () => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Prénom</th>
						<th scope="col">Nom</th>
						<th scope="col">Age</th>
						<th scope="col">Email</th>
						<th scope="col">Rôle</th>
						<th scope="col">Accepté</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Fli</td>
						<td>Bustier</td>
						<td>45</td>
						<td>flibustier@yopmail.com</td>
						<td>Admin</td>
						<td>Oui</td>
						<td>
							<a href="#">
								<img
									src={TrashIcon}
									alt="Delete a user"
									width="25"
									height="25"
								/>
							</a>
						</td>
						<td>
							<a href="#">
								<img
									src={TickIcon}
									alt="Accept or refuse user"
									width="25"
									height="25"
								/>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default UserDashboard;