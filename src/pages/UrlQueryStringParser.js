import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Typography } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;

const SEARCH =
	'https://www.google.com/search?q=india&oq=india&aqs=chrome..69i57j69i60j69i61j5j69i60l3j69i65.4326j0j7&sourceid=chrome&ie=UTF-8';

export function UrlQueryStringParser() {
	const [value, setValue] = useState(SEARCH);
	const [result, setResult] = useState({});

	useEffect(() => {
		getJsonFromUrl2(value);
	}, []);

	function handleChange(event) {
		setValue(event.target.value);
		getJsonFromUrl2(event.target.value);
	}

	function getJsonFromUrl2(url) {
		var question = url.indexOf('?');
		var hash = url.indexOf('#');
		if (hash == -1 && question == -1) return {};
		if (hash == -1) hash = url.length;
		var query =
			question == -1 || hash == question + 1
				? url.substring(hash)
				: url.substring(question + 1, hash);
		var result = {};
		query.split('&').forEach(function(part) {
			if (!part) return;
			part = part.split('+').join(' '); // replace every + with space, regexp-free version
			var eq = part.indexOf('=');
			var key = eq > -1 ? part.substr(0, eq) : part;
			var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : '';
			var from = key.indexOf('[');
			if (from == -1) result[decodeURIComponent(key)] = val;
			else {
				var to = key.indexOf(']', from);
				var index = decodeURIComponent(key.substring(from + 1, to));
				key = decodeURIComponent(key.substring(0, from));
				if (!result[key]) result[key] = [];
				if (!index) result[key].push(val);
				else result[key][index] = val;
			}
		});
		setResult(result);
		console.log('result 2', result);
		// return result;
	}

	return (
		<div className="mt-30">
			<Row type="flex" justify="center">
				<Col span={20}>
					<h3>URL Parser</h3>
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
					<Text strong>Result</Text>
					<table border="1">
						{Object.keys(result).map((key, index) => (
							<tr key={index}>
								<td className="pr-20">
									<strong>{key}</strong>
								</td>
								<td>{result[key]}</td>
							</tr>
						))}
					</table>
				</Col>
			</Row>
		</div>
	);
}
