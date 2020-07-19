const express = require('express');
const apiRoutes = require("./controller/controller");
const htmlRoutes = require("./controller/htmlController")
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});