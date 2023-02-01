const db = require('../database/db.js');

const insert_user = db.prepare(/*sql*/ `
  INSERT INTO users (username, hash)
  VALUES ($username, $hash)
  RETURNING id
`);

function createUser(username, hash) {
    return insert_user.get({ username, hash });
}

const select_user_by_name = db.prepare(/*sql*/ `
  SELECT id, username, hash, created_at
  FROM users
  WHERE username = ?
`);

function getUserByUsername(username) {
    return select_user_by_name.get(username);
}

module.exports = { createUser, getUserByUsername };
