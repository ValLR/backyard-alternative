import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';
import {
  	Link
} from 'react-router-dom';
import FA from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular'
import Navbar from './Navbar.js';
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
			<div className='project-page'>
		    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
		    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				<Navbar />
	      			{projectName === undefined ?
	      				<div className='projectIndex container'>
	      					<div className='row'>
	      						<div class='col s12 m12 l12'>
	      						<div class="input-field col s6">
          							<i class="material-icons">search</i>
          							<input type='text' value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Buscar proyectos" className='validate'/>
        							</div>
	      						</div>
	      					</div>
		      				<div className='projects-list row'>
		      					{filteredProjects.map((project, index) =>
		      						<div className='link-services' key={index}>
		      							<Link className='link-services' to={`/projects/${project.slug}`}>{project.canonicalName + ' '}</Link>
		      							<ConnectedServices project={project.canonicalName} slug={project.slug} id={project.id} data={project.resources}/>
		      						</div>
		      					)}
		      				</div>
	      				</div>
	      				: 
	      					allProjects.map((project) =>
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