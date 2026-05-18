const express = require('express');

const router = express.Router();

const Product = require('../models/product');

router.get('/', async (req, res) => {

    const products = await Product.find();

    res.render('products/index', { products });

});

router.get('/create', (req, res) => {

    res.render('products/create');

});

router.post('/create', async (req, res) => {

    await Product.create(req.body);

    res.redirect('/products');

});

router.get('/:id', async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.render('products/details', { product });

});

router.get('/edit/:id', async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.render('products/edit', { product });

});

router.post('/:id/update', async (req, res) => {

    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.redirect('/products');

});

router.post('/:id/delete', async (req, res) => {

    await Product.findByIdAndDelete(req.params.id);

    res.redirect('/products');

});

module.exports = router;