//import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchAllComponent from './components/SearchAllComponent';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {
	return (
		<BrowserRouter>
			<header className="header">
				<Navbar> </Navbar>
			</header>

			// Router example
			<Routes>
				<Route path="/login" element={<Login/>}> </Route>
				<Route path="/signup" element={<Signup/>}> </Route>
				<Route path="/about" element={<About/>}> </Route>
				<Route path="/" element={<Home/>}> </Route>
			</Routes>




		</BrowserRouter>
	)
}






/*
function App() {
	return (
	  <div className="App">
		<SearchAllComponent deneme="dfdfhd"/>
	  </div>
	);
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
