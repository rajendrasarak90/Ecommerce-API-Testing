const express = require('express')
const router = express.Router()

const { getAllProducts, deleteProduct, createNewProduct, updateProductQuantity, } = require('../controllers/products');

// home page route to get all products list
router.route('/').get(getAllProducts);
// route to create a new product
router.route('/create').post(createNewProduct);
// route to update the quantity of existing product using id
router.route('/:id/update_quantity').post(updateProductQuantity);
// route to delete the product using id
router.route('/:id').delete(deleteProduct);

module.exports = router