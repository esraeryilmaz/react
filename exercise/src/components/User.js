import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


class User extends React.Component {
	
	render() {
		return (
			<div>
				<h5>USER COMPONENT</h5>
				<div>
					<form>
						<input type="text"/>
						<button>Gönder</button>
					</form>
				</div>
			</div>
		);


	}
	
}

export default User;