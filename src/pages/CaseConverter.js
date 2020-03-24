import React, { useState } from 'react';
import { Input, Row, Col, Typography } from 'antd';
import { lowerCase, camelCase, kebabCase, upperCase } from 'lodash';

const { TextArea } = Input;
const { Text } = Typography;

export function CaseConverter() {
	const [value, setValue] = useState('sample text');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<div className="mt-30">
			<Row type="flex" justify="center">
				<Col span={20}>
					<TextArea rows={4} value={value} onChange={handleChange} />
				</Col>
			</Row>
			<Row type="flex" justify="center" className="mt-30">
				<Col span={20}>
					<Text strong>UPPERCASE</Text>
					<p>{upperCase(value)}</p>
					<Text strong>lowercase</Text>
					<p>{lowerCase(value)}</p>
					<Text strong>camelCase</Text>
					<p>{camelCase(value)}</p>
					<Text strong>kebab-case</Text>
					<p>{kebabCase(value)}</p>
				</Col>
			</Row>
		</div>
	);
}
