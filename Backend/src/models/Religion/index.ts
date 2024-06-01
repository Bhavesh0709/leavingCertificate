import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';

class Religion extends Model {}

Religion.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        religion: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Religion',
        tableName: 'religion'
    }
);

export default Religion;
