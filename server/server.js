const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use("/items/:id/finish", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const targetItem = router.db.get("items").find({ id });

    if (targetItem.value() == null) {
        return res.status(404).json({ message: "Item not found" });
    }

    const { isDone } = targetItem.value();

    if (isDone) {
        return res.status(400).json({ message: "Item is already done." });
    }

    targetItem.assign({ isDone: true, finishedAt: Date.now() }).write();

    return res.status(200).send(targetItem);
});
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
