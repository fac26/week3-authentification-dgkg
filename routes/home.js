const { layout, postForm } = require('../src/templates');
const { getSession } = require('../model/session');
const { createPost } = require('../model/posts');

function get(request, response) {
  const sid = request.signedCookies.sid;
  const session = getSession(sid);
  const title = 'Home | Bikes, bikes, bikes!';
  const content = /*html*/ `
    <main>
      <section>
        <div>
        <p>
          Welcome to bikes, bikes, bikes your go-to forum for all things bikes.
          Please feel free to read and post.
        </p>
        ${postForm()}
        </div>
        ${
          session
            ? /*html*/ `<form method="POST" action="/Log Out"><button class="Button">Log Out</button></form>`
            : /*html*/ `<p></p>`
        }
      </section>
    </main>
    `;
  const stylesheet = 'home.css';

  response.send(layout({ title, content, stylesheet }));
}

function post(request, response) {
  const sid = request.signedCookies.sid;
  const session = getSession(sid);
  const current_user = session && session.user_id;
  // if (!request.body.content || !current_user) {
  //   return response.status(401).send('<h1>Post Failed!</h1>');
  // }
  createPost(request.body.comment, current_user);
  response.redirect('/posts');
}

module.exports = { get, post };
