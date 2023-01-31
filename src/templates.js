function layout({ title, content }) {
    return /*html*/ `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="style.css">
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

function form() {
    return /*html*/ `
      <form method="POST">
          <div>
              <label for="title">Enter title</label>
              <input type="text" name="title" id="title" value="" />
          </div>
          <div>
              <label for="comment">Enter message</label>
              <input type="text" name="comment" id="comment" value="" />
          </div>
          <button type="submit">Submit</button>
      </form>
  `;
}

module.exports = { layout, form };
