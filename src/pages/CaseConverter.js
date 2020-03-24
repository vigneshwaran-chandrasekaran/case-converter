import React, { useState } from 'react';
import { Input } from 'antd';
import { camelCase } from 'lodash';

const { TextArea } = Input;

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
			<TextArea rows={4} value={value} onChange={handleChange} />
			<form onSubmit={handleSubmit}>
				<label>
					<textarea value={value} onChange={handleChange} />
				</label>
				<div>
					<input type="submit" value="Submit" />
				</div>
				<p>{value.toUpperCase()}</p>
				<p>{value.toLowerCase()}</p>
				<p>{camelCase(value)}</p>
			</form>
		</div>
	);
}
