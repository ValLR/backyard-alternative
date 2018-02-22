// import { graphql, commitMutation } from 'react-relay'
// import environment from 'environment.js'


// const mutation = graphql`
//     mutation CreateArticleMutation($input: CreateArticleInput!) {
//         createArticle(input: $input) {
//             edge {
//                 node {
//                     id
//                     content
//                     section {
//                         id
//                     }
//                 }
//             }
//         }
//     }
// `
//
// export default (sectionId, content, callback) => {
//     commitMutation(
//         environment,
//         {
//             mutation,
//             variables: {
//                 input: {
//                     sectionId,
//                     content,
//                     clientMutationId: "",
//                 }
//             },
//             onCompleted: res => {
//                 callback && callback(res.createArticle.article)
//             },
//             onError: err => console.error(err),
//             configs: [{
//               type: 'RANGE_ADD',
//               parentID: sectionId,
//               connectionInfo: [{
//                 key: 'Section_articles',
//                 rangeBehavior: 'append',
//               }],
//               edgeName: 'edge',
//             }]
//         }
//     )
// }
