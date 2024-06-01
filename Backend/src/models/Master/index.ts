import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';

class Master extends Model {}

Master.init(
    {
        aadharNo: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        studentId: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mothersName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        motherTongue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        birthPlace: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        religion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        caste: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subCaste: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        previousSchoolName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateOfAdmission: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        division: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        progressInStudy: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        behaviour: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        currentDivision: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reasonOfLeaving: {
            type: DataTypes.STRING,
            allowNull: true
        },
        shera: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        schoolLeavingDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'MasterDB',
        tableName: 'masterDB'
    }
);

export default Master;
