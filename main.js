const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true,
}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});



app.listen(port, () => {
    console.log("Iam listening to Port 3000, Do your work!");
})