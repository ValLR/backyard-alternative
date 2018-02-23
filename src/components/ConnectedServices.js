import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import 'css/projectData.css';
import ServicePreview from './ServicePreview.js';

const available_services = ["pivotal", "github", "codeship", "papertrail", "sentry"];

class ConnectedServices extends Component {

	render() {

		const connectedServices = this.props.data.edges.map((node) =>
			node.node
		)

		return(
			<Row className='index-links'>
				{available_services.map((service, index) =>
					<ServicePreview key={index} data={connectedServices} service={service} className='icons' />
				)}
			</Row>
		)
	}
}

ConnectedServices.propTypes = {
	data: PropTypes.object,
}

export default ConnectedServices