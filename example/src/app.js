import React, { Component } from 'react';
import Rclib from '../../src';
import styles from './app.module';

export default class App extends Component {
	render() {
		const appStyle = {
			padding: '4px',
			borderRadius: '4px',
			boxShadow: '#aaa 0 0 6px'
		};

		return (
			<div style={appStyle}>
				<Rclib className={`${styles.container}`} />
			</div>
		);
	}
}
