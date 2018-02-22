import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Codigo from './Codigo.js';
import Recursos from './Recursos.js';
import 'css/projectPage.css';

class ProjectView extends Component{
	render() {

		const { edges } = this.props.data;
		const { title, slug, description } = this.props;
		const associated_services =	edges.map((services) =>
			services.node
		);

		return(
			<div className='project-container'>
				<h1>{title}</h1>
				<hr/>
				<section id={slug} className='services'>
					<div className='code-row'>
						<div className='categories'>Código</div>
						<div className='code-container'>
							<Codigo services={associated_services} />
						</div>
					</div>
					<div className='resources-row'>
						<div className='categories'>Recursos</div>
						<div className='icon-container'>
							<Recursos services={associated_services} />
						</div>
					</div>
				</section>
				<section className='description'>
					{description === '' ?
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, iste impedit ad sapiente ex aperiam,
					reprehenderit necessitatibus eum deserunt voluptate a numquam doloremque quibusdam voluptatem architecto 
					incidunt ut nam exercitationem!</p>
					: <p>{description}</p>}
				</section>
				<a className='docs' href=''>Ir a Documentación</a>
			</div>

    )}
}

ProjectView.propTypes = {
	data: PropTypes.object,
	title: PropTypes.string,
	slug: PropTypes.string,
	description: PropTypes.string,
}

export default ProjectView