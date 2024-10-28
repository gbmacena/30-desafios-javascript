function extractConnectionValues(obj) {
  const results = [];

  if (obj.connection && typeof obj.connection === "object") {
    if (obj.connection._id) {
      results.push(obj.connection._id);
    }
    if (obj.connection.label) {
      results.push(obj.connection.label);
    }
  }

  if (Array.isArray(obj.connections)) {
    for (const conn of obj.connections) {
      if (conn._id) {
        results.push(conn._id);
      }
      if (conn.label) {
        results.push(conn.label);
      }
    }
  }

  return results;
}

const exampleObject = {
  connection: {
    _id: "123",
    label: "Connection 1",
  },
  connections: [
    {
      _id: "456",
      label: "Connection 2",
    },
    {
      _id: "789",
      label: "Connection 3",
    },
  ],
};

console.log(extractConnectionValues(exampleObject));
