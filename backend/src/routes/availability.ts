import { Router } from 'express';
import { format, parseISO, startOfDay, addMinutes, isAfter, isBefore } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';

const router = Router();

// Business Hours
const HOURS = {
    MONDAY: { start: '10:00', end: '19:00' },
    TUESDAY: { start: '10:00', end: '19:00' },
    WEDNESDAY: { start: '10:00', end: '19:00' },
    THURSDAY: { start: '09:00', end: '17:00' },
    FRIDAY: { start: '09:00', end: '17:00' },
    SATURDAY: { start: '14:00', end: '19:00' },
    SUNDAY: null // Closed
};

router.get('/', async (req, res) => {
    try {
        const { date, serviceId } = req.query;
        if (!date || !serviceId) {
            return res.status(400).json({ error: 'Date and serviceId are required' });
        }

        const selectedDate = parseISO(date as string);
        const dayName = format(selectedDate, 'EEEE').toUpperCase() as keyof typeof HOURS;
        const schedule = HOURS[dayName];

        if (!schedule) {
            return res.json([]); // Closed
        }

        // Generate slots
        const slots = [];
        let currentSlot = parseISO(`${date}T${schedule.start}`);
        const endSlot = parseISO(`${date}T${schedule.end}`);

        // Fetch existing appointments for this day
        const existingAppointments = await Appointment.findAll({
            where: {
                date: {
                    [Op.between]: [
                        startOfDay(selectedDate),
                        addMinutes(startOfDay(selectedDate), 1439)
                    ]
                }
            }
        });

        const bookedTimes = existingAppointments.map(a => format(a.date, 'HH:mm'));

        while (isBefore(currentSlot, endSlot)) {
            const timeStr = format(currentSlot, 'HH:mm');
            if (!bookedTimes.includes(timeStr)) {
                slots.push(timeStr);
            }
            currentSlot = addMinutes(currentSlot, 30); // 30 min slots
        }

        res.json(slots);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
