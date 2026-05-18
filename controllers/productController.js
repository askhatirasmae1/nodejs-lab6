const Product = require('../models/product');

/* LIST */

exports.getAllProducts = async (req, res) => {

    const products = await Product.find();

    res.render('products/index', {
        title: 'Produits',
        products
    });

};

/* DETAILS */

exports.getProductById = async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.render('products/details', {
        title: product.name,
        product
    });

};

/* CREATE FORM */

exports.showCreateForm = (req, res) => {

    res.render('products/create', {
        title: 'Ajouter Produit'
    });

};

/* CREATE */

exports.createProduct = async (req, res) => {

    await Product.create(req.body);

    res.redirect('/products');

};

/* EDIT FORM */

exports.showEditForm = async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.render('products/edit', {
        title: 'Modifier Produit',
        product
    });

};

/* UPDATE */

exports.updateProduct = async (req, res) => {

    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.redirect('/products');

};

/* DELETE */

exports.deleteProduct = async (req, res) => {

    await Product.findByIdAndDelete(req.params.id);

    res.redirect('/products');

};