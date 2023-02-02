const { layout, signUpForm } = require('../src/templates');
const { getUserByUsername } = require('../model/user');
const { createSession } = require('../model/session');
const bcrypt = require('bcryptjs');

function get(request, response) {
  const title = 'Log-In | Bikes, bikes, bikes!';
  const content = /*html*/ `
  <main>
    <section>
      <div>
        <h1>Log in to your account</h1>
        ${signUpForm()}
      </div>
    </section>
  </main>
  `;
  response.send(layout({ title, content }));
}

function post(request, response) {
  const { username, password } = request.body;
  const user = getUserByUsername(username);
  if (!username || !password || !user) {
    response.status(400).send('<h1>Login Failed</h1>');
  }
  bcrypt.compare(password, user.hash).then((result) => {
    if (!result) {
      return response.status(400).send('<h1>Login Failed</h1>');
    } else {
      const session_id = createSession(user.id);
      response.cookie('sid', session_id, {
        signed: true,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'lax',
      });
      response.redirect('/');
    }
  });
}

module.exports = { get, post };
