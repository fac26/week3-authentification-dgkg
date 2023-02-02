const { displayPosts } = require('../model/posts.js');
const { getSession } = require('../model/session.js');
const { layout } = require('../src/templates.js');

function get(request, response) {
  const sid = request.signedCookies.sid;
  const session = getSession(sid);
  const posts = displayPosts(session.user_id);
  const title = 'Posts | Bikes, bikes, bikes!';
  const content = /*html*/ `
        <main>
            <section>
                <div>
                    <h1>Posts</h1>
                    <ul>
                        ${posts
                          .map((post) => {
                            return /*html*/ `
                                <li>
                                    <p>${post.content}</p>
                                    <p>${post.created_at}</p>
                                </li>
                            `;
                          })
                          .join('')}
                    </ul>
                </div>
            </section>
        </main>
    `;
  const stylesheet = 'posts.css';
  response.send(layout({ title, content, stylesheet }));
}

module.exports = { get };
