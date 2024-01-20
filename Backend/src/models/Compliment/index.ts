import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/database";

class Compliment extends Model {};

Compliment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    statement: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'Compliment',
    tableName: 'compliment'
}
);

export default Compliment;