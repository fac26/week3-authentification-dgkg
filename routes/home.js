const { layout, postForm } = require('../src/templates');

function get(request, response) {
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
      </section>
    </main>
    `;
    const stylesheet = 'home.css';

    response.send(layout({ title, content, stylesheet }));
}

module.exports = { get };
