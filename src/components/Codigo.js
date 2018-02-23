import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from './Icon.js';
import 'css/projectPage.css';

class Codigo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			connected:false
		}
	}

	componentDidMount() {
		this.props.services.map((service) =>
			service.rtype === 'github'
			? this.setState({
				connected:true,
			})
			: ''
		)
	}

	render(){
		return(
			this.state.connected ?
			this.props.services.map((service) =>
				service.rtype === 'github'
				? 
				<Col sm={2} md={2} lg={2} className='git-container' key={service.url}>
					<Row className='text-center'>
						<Icon title={service.name} url={service.url} service={service.rtype} width='34' height='34' status='access'/>
						<p className='access'>{service.name}</p>
					</Row>
				</Col>
				: ''
			)
			: 
			<Col sm={2} md={2} lg={2} className='git-container'>
				<Row className='text-center'>
					<Icon title={'github'} url={'github'} service={'github'} width='38' height='37' status='disabled'/>
					<p className='disabled'>Github</p>
				</Row>
			</Col>
		)
	}
}

Codigo.propTypes = {
	services: PropTypes.array,
}

export default Codigo