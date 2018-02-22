/**
 * @flow
 * @relayHash a3a912e1486be21db023a7fce3e5d910
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateProjectMutationVariables = {|
  slug?: ?string;
  canonicalName?: ?string;
  description?: ?string;
  resources?: ?$ReadOnlyArray<?{
    rtype?: ?string;
    name?: ?string;
    url?: ?string;
  }>;
|};
export type CreateProjectMutationResponse = {|
  +createProject: ?{|
    +id: string;
    +slug: ?string;
    +canonicalName: ?string;
    +description: ?string;
    +resources: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string;
          +rtype: ?string;
          +name: ?string;
          +url: ?string;
        |};
      |}>;
    |};
  |};
|};
*/


/*
mutation CreateProjectMutation(
  $slug: String
  $canonicalName: String
  $description: String
  $resources: [ResourceInput]
) {
  createProject(slug: $slug, canonicalName: $canonicalName, description: $description, resources: $resources) {
    id
    slug
    canonicalName
    description
    resources {
      edges {
        node {
          id
          rtype
          name
          url
        }
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "slug",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "canonicalName",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "description",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "resources",
        "type": "[ResourceInput]",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateProjectMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "canonicalName",
            "variableName": "canonicalName",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "resources",
            "variableName": "resources",
            "type": "[ResourceInput]"
          },
          {
            "kind": "Variable",
            "name": "slug",
            "variableName": "slug",
            "type": "String"
          }
        ],
        "concreteType": "Project",
        "name": "createProject",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "slug",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "canonicalName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "description",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ResourceConnection",
            "name": "resources",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ResourceEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Resource",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "rtype",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "url",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateProjectMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "slug",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "canonicalName",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "description",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "resources",
        "type": "[ResourceInput]",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateProjectMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "canonicalName",
            "variableName": "canonicalName",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "resources",
            "variableName": "resources",
            "type": "[ResourceInput]"
          },
          {
            "kind": "Variable",
            "name": "slug",
            "variableName": "slug",
            "type": "String"
          }
        ],
        "concreteType": "Project",
        "name": "createProject",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "slug",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "canonicalName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "description",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ResourceConnection",
            "name": "resources",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ResourceEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Resource",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "rtype",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "url",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateProjectMutation(\n  $slug: String\n  $canonicalName: String\n  $description: String\n  $resources: [ResourceInput]\n) {\n  createProject(slug: $slug, canonicalName: $canonicalName, description: $description, resources: $resources) {\n    id\n    slug\n    canonicalName\n    description\n    resources {\n      edges {\n        node {\n          id\n          rtype\n          name\n          url\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
