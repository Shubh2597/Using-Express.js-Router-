const bodyParser = require('body-parser');
const express    = require('express');
const app        = express();

const admimRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(admimRoutes);
app.use(shopRoutes);

app.listen(3000);