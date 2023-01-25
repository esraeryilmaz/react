import React from "react";
import LogService from "../services/LogService";

class SearchAllComponent extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			logs:[]
		}
	}

	componentDidMount() {
		console.log(this.props.deneme)
		LogService.getAllLogs().then((response) => {
			this.setState({ logs : response.data })
		});
	}

	render() {
		return (
			<div>
				<h1 className="text-center"> Logs List </h1>
				<table className="table table-striped">
					<thead>
						<tr>
							<td> Log Id </td>
							<td> Log Date </td>
							<td> Log Class Name </td>
							<td> Log Severity </td>
							<td> Log Message </td>
						</tr>
					</thead>
					<tbody>
					{
						this.state.logs.map(
							log =>
							<tr key = {log.id}>
								<td>{log.id}</td>
								<td>{log.date}</td>
								<td>{log.className}</td>
								<td>{log.severity}</td>
								<td>{log.message}</td>
							</tr>
						)
					}
					</tbody>
				</table>
			</div>
		)
	}

}



export default SearchAllComponent