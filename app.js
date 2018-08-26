const Koa = require('koa');
const views = require('koa-views');
const serve = require('koa-static');
const fs = require('fs');

var routes = [];

fs.readdirSync('./views').forEach(file => {
	routes.push(file.replace(/\.[^.]+/, ''));
})
console.log('routes', routes);

const app = new Koa()
	.use(views(__dirname + '/views', {
		map: {
			hbs: 'handlebars'
		},
		options: {
			partials: {
				header: __dirname + '/partials/header',
				footer: __dirname + '/partials/footer'
			}
		}
	}))
	.use(serve(__dirname))
	.use(function (ctx) {
		console.log('path', ctx.path);
		if (~routes.indexOf(ctx.path.substr(1))) {
			return ctx.render(`.${ctx.path}.hbs`);
		}

		if (ctx.path === '/') {
			return ctx.render('./index.hbs');
		}
	})

app.listen(80, () => {
	console.log('app is starting at port 80');
});
