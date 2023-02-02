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
						? /*html*/ `<form method="POST" action="/log-out"><button class="Button">Log Out</button></form>`
						: /*html*/ `<nav><a href="/sign-up">Sign up</a> or <a href="/log-in">log in</a></nav>`
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
	createPost(request.body.comment, current_user);
	response.redirect('/posts');
}

module.exports = { get, post };
