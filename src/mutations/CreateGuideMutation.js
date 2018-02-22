import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'

import environment from '../environment'


const mutation = graphql`
  mutation CreateGuideMutation(
        $name: String,
        $title: String,
        $sections: [SectionInput]
      ){
    createGuide(
      name:$name,
      title:$title,
      sections:$sections
    ){
      id
      name
      title
      sections{
        edges{
          node{
            id
            name
            title
            articles{
              edges{
                node{
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
`

export default (title, name, sections, callback) => {

  commitMutation(
    environment,
    {
      mutation,
      variables: {
        title,
        name,
        sections,
        clientMutationId: ""
      },
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
