import React, { useState } from 'react';

export function CaseConverter() {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	function handleSubmit(event) {
		alert('An essay was submitted: ' + value);
		event.preventDefault();
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					<textarea value={value} onChange={handleChange} />
				</label>
				<div>
					<input type="submit" value="Submit" />
				</div>
				<p>{value.toUpperCase()}</p>
				<p>{value.toLowerCase()}</p>
			</form>
		</div>
	);
}
