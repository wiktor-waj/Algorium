import React from 'react';
import { AlgoPreview } from './algoPreview/';
import { Outlet, Link } from 'react-router-dom';

export const ListModules = () => {
	return (
		<>
			<Outlet />
			<ul>
				<li>
					<Link to='bubble-sort'>Bubble sort</Link>
				</li>
				<li>
					<Link to='merge-sort'>Merge sort</Link>
				</li>
			</ul>
		</>
	);
};
