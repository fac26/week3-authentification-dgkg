function layout({ title, content, stylesheet }) {
  return /*html*/ `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="${stylesheet}">
      </head>
      <body>
        <header>
          <h1>Bikes, bikes bikes</h1>
        </header>
        ${content}
      </body>
    </html>
  `;
}

function postForm() {
  return /*html*/ `
      <form method="POST">
          <div>
              <label for="title">Enter title</label>
              <input type="text" name="title" id="title" value="" />
          </div>
          <div>
              <label for="comment">Enter message</label>
              <textarea type="text" name="comment" id="comment" value=""> </textarea>
          </div>
          <button type="submit">Submit</button>
      </form>
  `;
}

function signUpForm() {
  return /*html*/ `
    <form method="POST">
        <div>
            <label for="username">Enter username</label>
            <input type="text" name="username" id="username" value="" />
        </div>
        <div>
            <label for="password">Enter password</label>
            <input type="text" name="password" id="password" value="" />
        </div>
        <button type="submit">Submit</button>
    </form>
`;
}

module.exports = { layout, postForm, signUpForm };
