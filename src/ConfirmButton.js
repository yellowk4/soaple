import React, { useState } from 'react';

const ConfirmButton = (props) => {
	const [isConfirmed, setIsConfirmed] =useState(false);

	const handleConfirm = () => {
		setIsConfirmed((isConfirmed) => !isConfirmed);
	}

	return (
		<div>
			<button onClick={handleConfirm} >
				{isConfirmed ? "클릭됨" : "클릭하기"}
			</button>
		</div>
	);
};

export default ConfirmButton;