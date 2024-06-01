import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../database/database';

class Shera extends Model {}

Shera.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        shera: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'ExtraDetails',
        tableName: 'extraDetails'
    }
);

export default Shera;
