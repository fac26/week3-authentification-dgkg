// require db
const db = require('../database/db.js');

// grab posts from db query
const select_posts = db.prepare(/*sql*/ `
  SELECT content, created_at FROM posts
  WHERE user_id = ?
  ORDER BY created_at DESC
`);

// listing posts func - using above query
function displayPosts(user_id) {
    return select_posts.all(user_id);
}

//  inserting posts query

const insert_post = db.prepare(/*sql*/ `
    INSERT INTO posts (content, user_id) 
    VALUES ($content, $user_id)
    RETURNING id, content, created_at
`);

// create posts func

function createPost(content, user_id) {
    return insert_post.get({ content, user_id });
}

module.exports = { displayPosts, createPost };
