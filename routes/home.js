const { layout, form } = require('../src/templates');

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
          ${form()}
        </div>
        </section>
      </main>
    `;

    response.send(layout({ title, content }));
}

module.exports = { get };
