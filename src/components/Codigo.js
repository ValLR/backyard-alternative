import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
				<div className='git-container' key={service.url}>
					<Icon title={service.name} url={service.url} service={service.rtype} width='30' height='30' status='access'/>
					<p className='access'>{service.name}</p>
				</div>
				: ''
			)
			: 
			<div className='git-container'>
				<Icon title={'github'} url={'github'} service={'github'} width='30' height='30' status='disabled'/>
			</div>
		)
	}
}

Codigo.propTypes = {
	services: PropTypes.array,
}

export default Codigo