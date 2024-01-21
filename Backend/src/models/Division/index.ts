import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/database";

class Division extends Model {};

Division.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    division: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'Division',
    tableName: 'division'
}
);

export default Division;