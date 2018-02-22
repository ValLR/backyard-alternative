// import { graphql, commitMutation } from 'react-relay'
// import environment from 'environment.js'


// const mutation = graphql`
//     mutation UpdateArticleMutation($input: UpdateArticleInput!) {
//         updateArticle(input: $input) {
//             article {
//                 id
//                 content
//             }
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
//                     content: article.content,
//                     clientMutationId: "",
//                 }
//             },
//             onCompleted: res => callback && callback(res.updateArticle.article),
//             onError: err => console.error(err),
//         }
//     )
// }
