// import { graphql, commitMutation } from 'react-relay'
// import environment from 'environment.js'


// const mutation = graphql`
//     mutation DeleteArticleMutation($input: DeleteArticleInput!) {
//         deleteArticle(input: $input) {
//             deletedId
//         }
//     }
// `
//
// export default (article, callback) => {
//     commitMutation(
//         environment,
//         {
//             mutation,
//             variables: {
//                 input: {
//                     id: article.id,
//                     clientMutationId: "",
//                 }
//             },
//             onCompleted: res => {
//                 callback && callback(res.createArticle.article)
//             },
//             onError: err => console.error(err),
//             configs: [
//                 {
//                   type: 'NODE_DELETE',
//                   deletedFieldName: 'deletedId',
//                 },
//                 {
//                   type: 'RANGE_DELETE',
//                   parentID: article.section.id,
//                   connectionKeys: [{
//                     key: 'Section_articles',
//                     filter: {'first': 1000},
//                   }],
//                   pathToConnection: ['section', 'articles'],
//                   deletedIDFieldName: 'deletedId',
//                 }
//             ]
//         }
//     )
// }
