const knex = require("knex");

const config = {
  client: "sqlite3",
  connection: {
    filename: "./database/dev.sqlite3"
  },
  useNullAsDefault: true
};

const db = knex(config);

const addUser = user => {
  return db("users").insert(user);
};
const getUsers = user => {
  if (user) {
    return db("users")
      .first()
      .where({ username: user });
  }
  return db("users");
};

// const execute = async () => {
//   try {
//     // const data = await addUser({
//     //   username: "akali",
//     //   password: "testpass123",
//     //   department: "FSPT-4"
//     // });
//     const data = await getUsers();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// execute();

module.exports = {
  addUser,
  getUsers
};
