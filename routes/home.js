const { layout, postForm } = require('../src/templates');
const { getSession } = require('../model/session');

function get(request, response) {
    const title = 'Home | Bikes, bikes, bikes!';
    const sid = request.signedCookies.sid;
    const session = getSession(sid);
    const content = /*html*/ `
    <main>
      <section>
        <div>
        <p>
          Welcome to bikes, bikes, bikes your go-to forum for all things bikes.
          Please feel free to read and post.
        </p>
        ${session}
        ${postForm()}
        </div>
      </section>
    </main>
    `;
    const stylesheet = 'home.css';

    response.send(layout({ title, content, stylesheet }));
}

module.exports = { get };
