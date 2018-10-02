const express = require("express");
const fastify = require("fastify");
const app = process.env.MODULE === 'fastify' ? fastify({
    logger: (process.env.NODE_ENV !== 'prod' || process.env.NODE_ENV !== 'production')
}) : express();

const $reply = `${process.env.MODULE} alive!`;

if (process.env.MODULE === 'fastify') {
    app.get('/', async (request, reply) => {
        return $reply
    })
} else {
    app.get("/", async (req, res) => {
        res.json($reply);
    });
}

module.exports = app;