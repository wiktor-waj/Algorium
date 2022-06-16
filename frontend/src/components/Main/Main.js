import React from 'react';
import './Main.css';

// TODO: Stylowanie oprzeć o styled z MUI (na wzór AlgoPreview/NavBar)

export const Main = () => {
	return (
		<div className='grid' id="main">
			<div className='g s1'>c1</div>
			<div className='g s2'>c2</div>
			<div className='g s3'>c3</div>
			<div className='g s4'>
				<h1>FUNKCJA 1</h1>
				Opis opis opis opis opis opis opis opis opis opis opis opis opis
				opis opis opis opis opis opis opis opis opis opis
			</div>
			<div className='g s5'>
				<h1>FUNKCJA 2</h1>
				Opis opis opis opis opis opis opis opis opis opis opis opis opis
				opis opis opis opis opis opis opis opis opis opis
			</div>
			<div className='g s6'>
				<h1>FUNKCJA 3</h1>
				Opis opis opis opis opis opis opis opis opis opis opis opis opis
				opis opis opis opis opis opis opis opis opis opis
			</div>
			<div className='g s7'>
				<h1>OPIS</h1>
				Opis opis opis opis opis opis opis opis opis opis opis opis opis
				opis opis opis opis opis opis opis opis opis opis
			</div>
		</div>
	);
};
