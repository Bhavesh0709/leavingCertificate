import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';

class SubCaste extends Model {}

SubCaste.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subCaste: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'SubCaste',
        tableName: 'subCaste'
    }
);

export default SubCaste;
