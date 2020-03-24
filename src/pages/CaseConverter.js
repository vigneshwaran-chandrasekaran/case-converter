import React, { useState } from 'react';
import { Input, Row, Col, Typography, Divider } from 'antd';
import { camelCase } from 'lodash';

const { TextArea } = Input;
const { Text } = Typography;

export function CaseConverter() {
	const [value, setValue] = useState('sample text');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<div>
			<Row type="flex" justify="center">
				<Col span={20}>
					<TextArea rows={4} value={value} onChange={handleChange} />
				</Col>
			</Row>
			<Row type="flex" justify="center">
				<Col span={20}>
					<Text strong>UPPERCASE</Text>
					<p>{value.toUpperCase()}</p>
					<Text strong>lowercase</Text>
					<p>{value.toLowerCase()}</p>
					<Text strong>camelCase</Text>
					<p>{camelCase(value)}</p>
				</Col>
			</Row>
		</div>
	);
}
