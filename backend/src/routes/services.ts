import { Router } from 'express';
import Service from '../models/Service';

const router = Router();

router.get('/', async (req, res) => {
    const services = await Service.findAll();
    res.json(services);
});

router.post('/', async (req, res) => {
    const service = await Service.create(req.body);
    res.status(201).json(service);
});

export default router;
