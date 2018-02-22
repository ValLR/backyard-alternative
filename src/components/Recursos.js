import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Service from './Service.js'
import 'css/projectPage.css';

const resources = ['Papertrail', 'Sentry', 'Codeship', 'Pivotal']

class Recursos extends Component {

	render() {

		return (
			resources.map((resource, index) =>
				<Service key={index} resource={resource} services={this.props.services} />
			)
		)
	}
}

Service.propTypes = {
	services: PropTypes.object,
}

export default Recursos