import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const network = Network.create((operation, variables) => {
    //Imagen docker local Unholster-api
    return fetch('http://localhost:5000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
        mode: 'cors'
    }).then(response => {
        return response.json()
    })
});


const environment = new Environment({
  network: network,
  store: new Store(new RecordSource()),
});


export default environment;
