import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Icon from './Icon.js'
import 'css/projectPage.css';

class Service extends Component {

	constructor(props) {
		super(props);
		this.state = {
			connected:false
		}
	}

	componentDidMount() {
		const { services } = this.props;

		services.map((resource) =>
			resource.rtype === this.props.resource.toLowerCase()
			? this.setState({
				connected:true,
			})
			: ''
		)
	}

	render(){
		const resource = this.props.resource.toLowerCase()

		return(
			this.state.connected ?
			this.props.services.map((service, index) =>
				service.rtype === resource ?
				<Col sm={2} md={2} lg={2} key={index} className="service-container">
					<Row className='text-center'>
						<Icon title={service.name} url={service.url} service={service.rtype} width='33' height='33' status='access'/>
						<p className="service-name">{this.props.resource}</p>
					</Row>
				</Col>
				: ''
			)
			: 
			<Col sm={2} md={2} lg={2} className="service-container">
				<Row className='text-center'>
					<Icon title={resource} url={resource} service={resource} width='33' height='33' status='disabled'/>
					<p className="service-name disabled">{this.props.resource}</p>
				</Row>
			</Col>
		)
	}
}

Service.propTypes = {
	resource: PropTypes.string,
	services: PropTypes.object,
}

export default Service