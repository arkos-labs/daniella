import { Router } from 'express';
import Appointment from '../models/Appointment';

const router = Router();

router.get('/', async (req, res) => {
    const appointments = await Appointment.findAll();
    res.json(appointments);
});

router.post('/', async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create appointment' });
    }
});

export default router;
