const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const session = require('express-session');

const ejsLayouts = require('express-ejs-layouts');

require('dotenv').config();

require('./db/mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(ejsLayouts);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

const productRoutes = require('./routes/productRoutes');

app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.redirect('/products');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});