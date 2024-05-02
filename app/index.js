const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodeapp',
  rowsAsArray: true
};


async function persistUser(name) {
  const connection = await mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('${name}')`;

  connection.execute(sql);
  (await connection).end();
}

async function getUsers() {
  const connection = mysql.createConnection(config);

  const sql = "SELECT * FROM people";
  const result = (await connection).execute(sql);
  (await connection).end();

  const res = await result.then(res => res);
  res.flat();
  data = res[0];

  const users = data.map(row => {
    return {
      id: row[0],
      nome: row[1]
    }
  });

  return users;
}

app.get('/', async (req, res) => {
  try {
    await persistUser('Felipe');
    const users = await getUsers();

    res.send(200,
      {
        "message": "<h1> FullCycle Rocks!! </h1>",
        people: users
      });
  } catch (error) {
    console.log (error)
  }
})

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
})
