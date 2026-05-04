import { Router } from 'express';
import Product from '../models/Product';

const router = Router();

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// Get single product
router.get('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

// Create product (Admin)
router.post('/', async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
});

// Update product (Admin)
router.put('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    await product.update(req.body);
    res.json(product);
});

// Delete product (Admin)
router.delete('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    await product.destroy();
    res.status(204).send();
});

export default router;
