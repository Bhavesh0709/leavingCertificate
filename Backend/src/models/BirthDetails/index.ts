import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../database/database';

class BirthDetails extends Model {}

BirthDetails.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        birthPlace: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        taluka: {
            type: DataTypes.STRING,
            allowNull: false
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
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
        modelName: 'BirthDetails',
        tableName: 'birthDetails'
    }
);

export default BirthDetails;