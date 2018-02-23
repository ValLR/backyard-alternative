import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Codigo from './Codigo.js';
import Recursos from './Recursos.js';
import { Row, Col } from 'react-bootstrap';
import 'css/projectPage.css';

class ProjectView extends Component{
	render() {

		const { edges } = this.props.data;
		const { title, slug, description } = this.props;
		const associated_services =	edges.map((services) =>
			services.node
		);

		return(
			<Row className='project-container'>
				<Row>
					<h1>{title}</h1>
					<hr id='separator'/>
				</Row>
				<section id={slug} className='services'>
					<Row className='code-row'>
						<Col sm={2} md={2} lg={1} className='text-left categories'>
							<p className='categories'>Código</p>
						</Col>
						<Col sm={10} md={10} lg={10} className='code-container'>
								<Codigo services={associated_services} />
						</Col>
					</Row>
					<Row className='resources-row'>
						<Col sm={2} md={2} lg={1} className='text-left categories'>
							<p className='categories'>Recursos</p>
						</Col>
						<Col sm={10} md={10} lg={10} className='icon-container'>
							<Recursos services={associated_services} />
						</Col>
					</Row>
				</section>
				<section className='description'>
					{description === '' ?
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, iste impedit ad sapiente ex aperiam,
					reprehenderit necessitatibus eum deserunt voluptate a numquam doloremque quibusdam voluptatem architecto 
					incidunt ut nam exercitationem!</p>
					: <p>{description}</p>}
				</section>
				<a className='docs' href=''>Ir a Documentación</a>
			</Row>

    )}
}

ProjectView.propTypes = {
	data: PropTypes.object,
	title: PropTypes.string,
	slug: PropTypes.string,
	description: PropTypes.string,
}

export default ProjectView