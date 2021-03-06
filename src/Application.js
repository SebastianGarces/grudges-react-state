import React, { useContext, useReducer } from 'react';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';
import { GrudgeContext } from './GrudgeContext';

const Application = () => {
	const { undo, isPast, isFuture, redo } = useContext(GrudgeContext);

	return (
		<div className="Application">
			<NewGrudge />
			<button className="full-width" disabled={!isPast} onClick={undo}>
				Undo
			</button>
			<button className="full-width" disabled={!isFuture} onClick={redo}>
				Redo
			</button>
			<Grudges />
		</div>
	);
};

export default Application;
