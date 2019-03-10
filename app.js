const express = require("express")
const next = require("next")

const server = express()
const app = next({
    dev: true
})
const handler = app.getRequestHandler()

app.prepare().then(() => {
    server.get("/detail/:id", (req, res) => {
        const real = "/detail"
        console.log(req.params)
        const params = {
            name: req.params.id
        }
        app.render(req, res, real, params)
    })
    server.get("*", (req, res) => {
        return handler(req, res)
    })
    server.listen(19001, () => {
        console.log("node server listening on 19001")
    })
}).catch((err) => {
    console.error(err)
})