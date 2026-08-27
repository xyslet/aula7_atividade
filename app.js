const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");

const app = express();

const MyLogger = function (req, res, next) {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
};

app.use(MyLogger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use((req, res) => {
    res.status(404).send(`
        <h1>Erro 404</h1>
        <p>Página não encontrada!</p>
        <a href="/">Voltar para a página inicial</a>
    `);
});

module.exports = app;