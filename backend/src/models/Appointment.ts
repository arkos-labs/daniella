import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Appointment extends Model {
    public id!: string;
    public serviceId!: string;
    public clientName!: string;
    public clientEmail!: string;
    public clientPhone!: string;
    public date!: Date;
    public status!: 'pending' | 'confirmed' | 'cancelled';
}

Appointment.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    serviceId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    clientName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clientEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clientPhone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
        defaultValue: 'pending'
    }
}, {
    sequelize,
    modelName: 'Appointment'
});

export default Appointment;
