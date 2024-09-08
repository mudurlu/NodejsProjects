const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if (ctx.originalUrl === '/') {
    ctx.response.type = 'text/html';
    ctx.body = `<h1>ANA SAYFA</h1>`
  }
  else if (ctx.originalUrl === '/about') {
    ctx.response.type = 'text/html';
    ctx.body = `<h1>HAKKINDA SAYFASI</h1>`;
  }
  else if (ctx.originalUrl === '/contact') {
    ctx.response.type = 'text/html';
    ctx.body = `<h1>ILETISIM SAYFASI</h1>`
  }
  else {
    ctx.response.type = 'text/html';
    ctx.body = `<h2>404 sayfa bulunamadi</h2>`
  }

});

app.listen(3000);