import React, { useState } from 'react';
import './App.css';

function Hooks() {
	const [message] = useState("Welcome to Hooks!!");
	const [flag, setFlag] = useState(false);
	const [count, setCount] = useState(0);
	const changeFlag = (e) => {
		setFlag(e.target.checked);
	}
	const clickFunc = () => {
		setCount(count + 1);
	}

	return (
		<div>
			<h1 className="bg-primary text-white display-4 ">React</h1>
			<div className="container">
					<h4 className="my-3">Hooks sample</h4>
					{flag ?
					<div className="alert alert-primary text-center">
						<p className="h5">{message}.</p>
						<p>click: {count} times!</p>
						<div>
							<button className='btn btn-primary' onClick={clickFunc}>click!</button>
						</div>
					</div>
					:
					<div className="card p-3 border-primary text-center">
						<p className="h5">{message}.</p>
						<p>click: {count} times!</p>
						<div>
							<button className='btn btn-primary' onClick={clickFunc}>click!</button>
						</div>
					</div>
					}
					<div className='form-group h6 text-center pt-3'>
						<input type="checkbox" className='form-check-input' id='check1' onChange={changeFlag} />
						<label className='form-check-label' htmlFor='check1'>change form style!</label>
					</div>
			</div>
		</div>
	);
};

export default Hooks;