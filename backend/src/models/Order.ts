import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Order extends Model {
    public id!: string;
    public clientName!: string;
    public clientEmail!: string;
    public clientPhone!: string;
    public total!: number;
    public subtotal!: number;
    public shippingCost!: number;
    public deliveryMethod!: 'pickup' | 'delivery';
    public deliveryLocation!: string;
    public deliveryAddress!: string;
    public status!: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    public paymentIntentId!: string;
}

Order.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    shippingCost: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    deliveryMethod: {
        type: DataTypes.ENUM('pickup', 'delivery'),
        defaultValue: 'delivery'
    },
    deliveryLocation: {
        type: DataTypes.STRING,
        allowNull: true // For pickup: 'Valenciennes' or 'Paris'
    },
    deliveryAddress: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'),
        defaultValue: 'pending'
    },
    paymentIntentId: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Order'
});

export default Order;
