import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import environment from 'environment.js'
import ProjectData from './ProjectData.js'
import Navbar from './Navbar.js';
import 'css/projectPage.css'

const ProjectPageQuery = graphql`
  query ProjectPageQuery {
    ...ProjectData_listado
  }
`

class ProjectPage extends Component {

  render() {

    return (
      <div className='projectPage'>
        <Navbar />
        <hr />
      	<QueryRenderer
        	environment={environment}
        	query={ProjectPageQuery}
        	render={({error, props}) => {
        		if (error) {
          		return <div>{error.message}</div>
        		} else if (props) {
          		return <ProjectData match={this.props.match} listado={props} />
        		}
        		return <div>Loading</div>
        	}}
      	/>
    </div>
    )}

}

export default ProjectPage