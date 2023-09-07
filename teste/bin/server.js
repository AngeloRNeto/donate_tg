'use strict'
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

const Web3 = require("web3");
const Ganache = require("ganache-cli");

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const web3 = new Web3(Ganache.provider());

server.listen(port, () => {
    web3.eth.getAccounts(console.log);
});

server.on('error', onError)
server.on('listening', onListening)
console.log('API rodando na porta ' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port => 0) {
        return port;
    }

    return false;
}

function onError(error) {

    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port == 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}