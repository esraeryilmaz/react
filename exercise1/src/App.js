//import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import User from './components/User';
import Navbar from './components/Navbar';
import NavbarProps from './components/NavbarProps';
import UserProps from './components/UserProps';

// class component
class App extends React.Component {

	render() {
		const test = 4;
		const isAuth  = true;
		return (
			<div className="App">
				<h4>APP COMPONENT</h4>
				<h4 style={{color:"purple",fontSize:"30px"}}>app comp with inline stylee</h4>
				<h4 className='header'>app comp with class style</h4>

				<User/>
				<Navbar/>
				<NavbarProps title = "Title props"/>
				<UserProps name = "Esra" />



			</div>
		);
	}
}


/*
class App extends React.Component {

	render() {
		const test = 4;
		const isAuth  = true;
		return (
			<div className="App">

				<h1>MERHABAAA !!!!!</h1>
				<h2>DÜNYAAA</h2>
				<h4>{1+1}</h4>
				<h4>{"esra".toUpperCase()}</h4>
				<h4>test</h4>
				<h4>{test}</h4>
				
				<div>
					{
						isAuth ? <p> kullanıcı kayıtlı</p> //koşul yapısı
						: null
					}
				</div>

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
*/





/*
function App() {
	const [date, setDate] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setDate(event.target.value);
	};


	return (
		<div>
			<FormControl sx={{ m: 5, minWidth: 180 }}>
			<InputLabel id="demo-simple-select-autowidth-label">Date</InputLabel>
			<Select
				labelId="demo-simple-select-autowidth-label"
				id="demo-simple-select-autowidth"
				value={date}
				onChange={handleChange}
				autoWidth
				label="Date"
			>
			<MenuItem value="">
				<em>None</em>
			</MenuItem>
			<MenuItem value={1}>Son 1 saat</MenuItem>
			<MenuItem value={2}>Son 2 saat</MenuItem>
			<MenuItem value={3}>Son 3 saat</MenuItem>
			</Select>
		</FormControl>
		</div>
	);
}
*/




	/*
	function App() {
	return (
		<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
			Learn React
			</a>
		</header>
		</div>
	);
	}
	*/
export default App;
