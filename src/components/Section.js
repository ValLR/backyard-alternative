import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Article from './Article.js'
import { nodes } from 'utils/GraphUtils.js'
import { faAngleRight } from '@fortawesome/fontawesome-free-solid'
import FA from '@fortawesome/react-fontawesome'
import {createFragmentContainer, graphql} from "react-relay";


export const Section = ({ data }) =>
	<div className="section">
		{data &&
			<Fragment>
				<h1 className="title" >{data.title}</h1>
				{nodes(data.articles).map((article, i) =>
					<Article key={i} data={article} />
				)}
			</Fragment>
		}
	</div>;

export const SectionLink = ({ data, guideName, activeSectionName }) => {
	const isActive = data.name === activeSectionName;
	const bullet = isActive ? <FA icon={faAngleRight} className="bullet" /> : '';
	return (
		<li
			className={ isActive ? 'active' : ''}
		>
			{bullet}<Link to={`/guide/${guideName}/${data.name}`} >{data.title}</Link>
		</li>
	)
};

export default createFragmentContainer(Section, graphql`
    fragment Section_section on Section {
            sectionId
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
    
`)
