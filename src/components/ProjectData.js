import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import {
  	Link
} from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import ConnectedServices from './ConnectedServices.js'
import ProjectView from './ProjectView.js'
import 'css/projectData.css';
import 'css/main.css';

class ProjectData extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search: '',
		}
	}

	updateSearch(event) {
		this.setState(
		{
			search:event.target.value,
		});
	}

	render() {
		const { edges } = this.props.listado.projects;
		const { projectName } = this.props.match.params;

		const allProjects = Object.values(
			edges.map(({node})=>
				node
			));

    	let filteredProjects = allProjects.filter((node) => {
    	return node.canonicalName.toLowerCase().includes(this.state.search.toLowerCase())
    	});

		return(
			<div className='project-data'>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
		    	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
		    	
			    {projectName === undefined ?
			    	<Grid className='projectIndex'>
			    		<Row className='show-grid'>
			    			<Col sm={12} md={12} lg={12} className='text-center'>
			    				<i className="material-icons">search</i>
          						<input type='text' value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Buscar proyectos" className='validate'/>
			    			</Col>
			    		</Row>
						<Row className='show-grid project-index'>
							<Col sm={9} md={9} lg={9} xsOffset={1}>
								{filteredProjects.map((project, index) =>
									<Row className='project-row' key={index}>
								      	<Col sm={5} md={5} lg={5} className='link-container'>
								      		<Link className='link-services' to={`/projects/${project.slug}`}>{project.canonicalName + ' '}</Link>
								      	</Col>
								      	<Col sm={4} md={4} lg={4} className='preview-container'>
								      		<ConnectedServices project={project.canonicalName} slug={project.slug} id={project.id} data={project.resources}/>
								      	</Col>
								    </Row>
								)}
							</Col>

						</Row>
					</Grid>		
					: allProjects.map((project) =>
	      				projectName === project.slug
	      				? <ProjectView key={project.id} title={project.canonicalName} description={project.description} match={projectName} data={project.resources} />
	      				: ''
					) 
			    }
			</div>
		)
	}
}

ProjectData.propTypes = {
	match: PropTypes.object,
	listado: PropTypes.object,
}

export default createFragmentContainer(ProjectData, graphql`
  	fragment ProjectData_listado on Query {
    	projects{
		    edges{
		      node{
		        id
		        slug
		        canonicalName
		        description
		        resources{
		          edges{
		            node{
		              id
		              name
		              rtype
		              url
		            }
		          }
		        }
		      }
		    }
		}
  	}
`)