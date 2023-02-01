const { layout, signUpForm } = require('../src/templates');
const { createUser } = require('../model/user');
const { createSession } = require('../model/session');
const bcrypt = require('bcryptjs');

function get(request, response) {
    const title = 'Sign up | Bikes, bikes, bikes!';
    const content = /*html*/ `
      <main>
        <section>
          <div>
          <h1>Create an account</h1>
          ${signUpForm()}
          </div>
        </section>
      </main>
      `;
    response.send(layout({ title, content }));
}

function post(request, response) {
    const { username, password } = request.body;
    if (!username || !password) {
        response
            .status(400)
            .send('<h1>Please choose a valid new password</h1>');
    } else {
        bcrypt.hash(password, 12).then((hash) => {
            const user = createUser(username, hash);
            const session_id = createSession(user.id);
            response.cookie('sid', session_id, {
                signed: true,
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: 'lax',
            });

            response.redirect(`/`);
        });
    }
}

module.exports = { get, post };
