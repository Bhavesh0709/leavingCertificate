import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';

class Caste extends Model {}

Caste.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        caste: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Caste',
        tableName: 'caste'
    }
);

export default Caste;
