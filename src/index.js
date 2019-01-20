import React, { PureComponent } from 'react';

export default class Rclib extends PureComponent {
	render() {
		const cls = this.props.className;
		return <div className={cls}>React App Component!</div>;
	}
}
