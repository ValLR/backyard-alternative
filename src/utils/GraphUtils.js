export const nodes = (typeConnection) =>
    typeConnection && typeConnection.edges ? typeConnection.edges.map(e => e.node) : []
