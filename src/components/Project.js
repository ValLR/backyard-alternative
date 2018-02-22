import React, { Component } from "react"
//import { createFragmentContainer, graphql } from 'react-relay'
import PropTypes from "prop-types"
import Service from "./Service.js"
import "css/projectData.css"

const available_services = ["pivotal", "github", "codeship", "papertrail", "sentry"]

class Project extends Component {

	render() {
      //console.log(this.props.project)
   		return (
        <div className="service-container">
          {available_services.map((service, index) =>
            <Service key={index} service={service} project={this.props.project} />
          )}
        </div>
    	)
  	}
}

Project.propTypes = {
	project: PropTypes.object,
  service: PropTypes.string
}


export default Project