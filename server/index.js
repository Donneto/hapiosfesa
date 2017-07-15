const Hapi = require('hapi');
const server = new Hapi.Server();
const Path = require('path');
const config = require('./config');

server.connection({
    host: config.hostname,
    port: config.port
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./public/views/index.html');
        }
    });

    server.route({
	    method: 'GET',
	    path: '/assets/{param*}',
	    handler: {
	        directory: {
	            path: './public/build'
	        }
	    }
	});
});


module.exports = server;