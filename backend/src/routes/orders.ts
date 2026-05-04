import { Router } from 'express';
import Order from '../models/Order';
import OrderItem from '../models/OrderItem';
import Product from '../models/Product';
import sequelize from '../config/database';

const router = Router();

// Create Order
router.post('/', async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const { clientName, clientEmail, clientPhone, items, deliveryMethod, deliveryLocation, deliveryAddress } = req.body;

        let subtotal = 0;
        const processedItems = [];

        for (const item of items) {
            const product = await Product.findByPk(item.productId);
            if (!product || product.stock < item.quantity) {
                throw new Error(`Product ${item.productId} not available or insufficient stock`);
            }
            const itemTotal = Number(product.price) * item.quantity;
            subtotal += itemTotal;
            processedItems.push({
                productId: product.id,
                quantity: item.quantity,
                price: product.price,
                total: itemTotal
            });
        }

        const shippingCost = deliveryMethod === 'delivery' ? 10.00 : 0; // Fixed shipping for now
        const total = subtotal + shippingCost;

        const order = await Order.create({
            clientName,
            clientEmail,
            clientPhone,
            subtotal,
            shippingCost,
            total,
            deliveryMethod,
            deliveryLocation,
            deliveryAddress,
            status: 'pending'
        }, { transaction: t });

        for (const pItem of processedItems) {
            await OrderItem.create({
                ...pItem,
                orderId: order.id
            }, { transaction: t });
            
            // Update stock
            await Product.decrement('stock', { by: pItem.quantity, where: { id: pItem.productId }, transaction: t });
        }

        await t.commit();
        res.status(201).json(order);
    } catch (error: any) {
        await t.rollback();
        res.status(400).json({ error: error.message });
    }
});

// Get Orders (Admin)
router.get('/', async (req, res) => {
    const orders = await Order.findAll({
        include: [{ model: OrderItem }]
    });
    res.json(orders);
});

export default router;
