import express from "express";

const app = express();

app.get("/", (req, res, next) => {
	res.send("gotcha!");
});

app.listen(3000);
