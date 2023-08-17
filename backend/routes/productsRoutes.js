const router = require('express').Router();
const {
	getAllProducts,
	getProduct,
	searchProduct,
	createProduct,
} = require('../controllers/productsController');

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct);
router.route('/search/:key').get(searchProduct);

module.exports = router;
