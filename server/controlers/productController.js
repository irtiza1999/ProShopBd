import Product from '../model/productModel.js'
import asyncHandler from 'express-async-handler'

//@desc Fetch all products
//@route GET/api/products
//@access Pulbic
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

//@desc Fetch single product
//@route GET/api/products/:id
//@access Pulbic
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProducts, getProductById }