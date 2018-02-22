import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
				<div key={index} className="service-container">
					<Icon title={service.name} url={service.url} service={service.rtype} width='30' height='30' status='access'/>
					<p className="service-name">{this.props.resource}</p>
				</div>
				: ''
			)
			: 
			<div className="service-container"> 
				<Icon title={resource} url={resource} service={resource} width='30' height='30' status='disabled'/>
				<p className="service-name">{this.props.resource}</p>
			</div>
		)
	}
}

Service.propTypes = {
	resource: PropTypes.string,
	services: PropTypes.object,
}

export default Service