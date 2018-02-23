import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gitIcon from 'images/github.png';
import pivIcon from 'images/pivotal.png';
import codeIcon from 'images/codeship.png';
import paperIcon from 'images/papertrail.png';
import sentryIcon from 'images/sentry.png';


class Icon extends Component {

  	render() {
    	const { title, url, service, status, width, height } = this.props;
    	const mode = this.props.status;
    
    	if (service === "github") {
      		return(
        		<a href={url} title={title} className={mode}> 
          			<img src={gitIcon} alt={service} className={status} width={width} height={height} />
        		</a>
    		)
    	}
	    else if (service === "pivotal") {
	      	return(
	        	<a href={url} title={title} className={mode}> 
	         		<img src={pivIcon} alt={service} className={status} width={width} height={height} />
	        	</a>
	      	)
	    }
    	else if (service === "codeship") {
      		return(
        		<a href={url} title={title} className={mode}> 
        			<img src={codeIcon} alt={service} className={status} width={width} height={height} />
        		</a>
      		)      
    }
    else if (service === "papertrail") {
      return (
        <a href={url} title={title} className={mode}> 
          <img src={paperIcon} alt={service} className={status} width={width} height={height} />
        </a>
      )
    }
    else if (service === "sentry") {
      return (
        <a href={url} title={title} className={mode}> 
          <img src={sentryIcon} alt={service} className={status} width={width} height={height} />
        </a>
      )
    }
    
  }
}

Icon.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  service: PropTypes.string,
  status: PropTypes.string,
}

export default Icon