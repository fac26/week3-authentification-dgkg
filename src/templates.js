function Layout({ title, content }) {
    return /*html*/ `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="/style.css">
      </head>
      <body>
        <main>
          ${content}
        </main>
      </body>
    </html>
  `;
}

module.exports = { Layout };
