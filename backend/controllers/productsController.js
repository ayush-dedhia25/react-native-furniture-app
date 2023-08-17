const Product = require('../models/productModel');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function createProduct(req, res) {
	try {
		const product = new Product(req.body);
		await product.save();
		return res.status(200).json({ message: 'product created successfully' });
	} catch (err) {
		console.log('🚀 ~ file: productsController.js:14 ~ createProduct ~ err:', err.message);
		return res.status(200).json({ message: 'failed to create the product' });
	}
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getAllProducts(req, res) {
	try {
		const products = await Product.find().sort({ createProduct: -1 });
		return res.status(200).json(products);
	} catch (err) {
		console.log('🚀 ~ file: productsController.js:30 ~ getAllProducts ~ err:', err.message);
		return res.status(200).json({ message: 'failed to gets the products' });
	}
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getProduct(req, res) {
	try {
		const product = await Product.findById(req.params.id).sort({ createProduct: -1 });
		return res.status(200).json(product);
	} catch (err) {
		console.log('🚀 ~ file: productsController.js:46 ~ getProduct ~ err:', err.message);
		return res.status(200).json({ message: 'failed to get the products' });
	}
}

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function searchProduct(req, res) {
	try {
		const product = await Product.aggregate([
			{
				$search: {
					index: 'furniture',
					text: {
						query: req.params.key,
						path: {
							wildcard: '*',
						},
					},
				},
			},
		]);
		return res.status(200).json(product);
	} catch (err) {
		console.log('🚀 ~ file: productsController.js:46 ~ searchProduct ~ err:', err.message);
		return res.status(200).json({ message: 'failed to find the product' });
	}
}

module.exports = { createProduct, getAllProducts, getProduct, searchProduct };
