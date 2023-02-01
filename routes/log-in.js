const { layout, signUpForm } = require('../src/templates');

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

module.exports = { get };
