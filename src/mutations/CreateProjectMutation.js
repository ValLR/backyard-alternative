import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

import environment from '../environment'


const mutation = graphql`
  mutation CreateProjectMutation(
        $slug: String,
        $canonicalName: String,
        $description: String,
        $resources: [ResourceInput]
      ){
    createProject(
        slug: $slug,
        canonicalName: $canonicalName,
        description: $description,
        resources: $resources
      ) {
      id,
      slug,
      canonicalName,
      description,
      resources{
        edges{
          node{
            id,
            rtype,
            name,
            url
          }
        }
      }
    }
  }
`

export default (slug, canonicalName, description, resources, callback) => {

  commitMutation(
    environment,
    {
      mutation,
      variables: {
        slug,
        canonicalName,
        description,
        resources,
        clientMutationId: ""
      },
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
