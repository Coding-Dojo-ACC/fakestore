const router = require('express').Router()
const db = require('../database/dbConfig')
const Product = require('./productModel')

// all has /api/products in front

router.get('/', (req, res, next) => {
    Product.findAll()
    .then(products => res.status(200).json({data: products}))
    .catch(err => next({ code: 500, message: 'Problems getting Products', err}))
})

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            if (product) {
                res.status(200).json({data: product})
            } else {
                res.status(404).json({message: 'ID not found'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Trouble getting Products', err})
        })
})

router.post('/', (req, res) => {
    Product.add(req.body)
        .then(product => {
            res.status(201).json({data: product})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Trouble adding Product'})
        })
})

router.put('/:id', (req, res) => {
    Product.update(req.params.id, req.body)
        .then(product => {
            if(product) {
                res.status(200).json({data: product})
            } else {
                res.status(404).json({message: 'Id not found'})
            }
        })
        .catch(err => {
            console.log(err)
                res.status(500).json({message: 'Trouble updating Product'})
        })
})

router.delete('/:id', (req, res) => {
    Product.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({message: "Product has been removed"})
            } else {
                res.status(400).json({message: 'ID not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Unable to remove that Product"})
        })
})

module.exports = router