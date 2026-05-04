import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Service extends Model {
    public id!: string;
    public title!: string;
    public description!: string;
    public duration!: number; // in minutes
    public price!: number;
}

Service.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        defaultValue: 60
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Service'
});

export default Service;
