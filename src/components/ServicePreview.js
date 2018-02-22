import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'css/projectData.css';
import Icon from './Icon.js';


class ServicePreview extends Component {

	constructor(props) {
		super(props)
		this.state = {
			connected: false,
		}
	}

	componentDidMount() {
		const { data, service } = this.props;

		data.map((resource) => resource.rtype === service
			? this.setState({
				connected: true,
			}) : ''
		)
	}

	render() {
		const { service } = this.props;

		return(
			this.state.connected ?
			<Icon title={service} url={service} service={service} width="25" height="26" status='preview' />
			: ''	
		)
	}

}

ServicePreview.propTypes = {
	data: PropTypes.array,
	service: PropTypes.string,
}

export default ServicePreview