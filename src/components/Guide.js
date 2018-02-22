import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar.js'
import { Section, SectionLink } from './Section.js'
import environment from 'environment.js'
import { nodes } from 'utils/GraphUtils.js'
import _ from 'lodash'
import 'css/docs.css'


const GuideQuery  = graphql`
    query GuideQuery {
        guides {
            edges {
                node {
                    id
                    title
                    name
                    sections {
                        edges {
                            node {
                                sectionId
                                title
                                name
                                articles {
                                    edges {
                                        node {
                                            id
                                            content
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default props => {
  const { guideName, sectionName } = props.match.params;
  const editModeClass = props.location.hash === '#edit'? 'editMode' : '';

  return <div className={`guide ${editModeClass}`}>
    <Navbar />
        <QueryRenderer
            environment={environment}
            query={GuideQuery}
            hash={props.location.hash}
            variables={{ guideName }}
            render={({errors, props}) => {
                if (props) {
                    const guide = props ? nodes(props.guides)[0] : null;
                    const title = guide ? guide.title : '';
                    const sections = guide ? nodes(guide.sections) : [];
                    const section = sections ? _.find(sections, s => s.name === sectionName) : null;
                    if (guide && sections && !section) {
                        return <Redirect to={`/guide/${guide.name}/${sections[0].name}`}/>
                    }
                    return <div className="split">
                        <div className="index">
                            <h1>{title}</h1>
                            <ul>
                                {sections.map((sec, i) =>
                                    <SectionLink key={i} data={sec} activeSectionName={sectionName}
                                                 guideName={guide.name}/>
                                )}
                            </ul>
                        </div>
                        <Section data={section}/>
                    </div>
                }
                return <div>Loading...</div>
            }}
        />

  </div>
}
