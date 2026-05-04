import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();

// Admin Login Skeleton
router.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;
    
    // In a real app, fetch from DB. Here we use env for demo.
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
        return res.json({ token });
    }
    
    res.status(401).json({ error: 'Invalid credentials' });
});

export default router;
