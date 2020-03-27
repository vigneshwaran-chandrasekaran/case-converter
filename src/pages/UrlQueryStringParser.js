import React, { useState } from 'react';
import { Input, Row, Col, Typography } from 'antd';
import { upperCase } from 'lodash';

const { TextArea } = Input;
const { Text } = Typography;

export function UrlQueryStringParser() {
	const [value, setValue] = useState('sample text');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<div className="mt-30">
			<Row type="flex" justify="center">
				<Col span={20}>
					<h3>Case Converter</h3>
					<TextArea
						rows={4}
						value={value}
						onChange={handleChange}
						spellCheck={true}
					/>
				</Col>
			</Row>
			<Row type="flex" justify="center" className="mt-30">
				<Col span={20}>
					<Text strong>UPPERCASE</Text>
					<p>{upperCase(value)}</p>
				</Col>
			</Row>
		</div>
	);
}
