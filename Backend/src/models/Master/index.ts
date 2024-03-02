import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';

class Master extends Model {}

Master.init(
    {
        aadharNo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        studentId: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.STRING,
            allowNull: false
        },
        caste: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subCaste: {
            type: DataTypes.STRING,
            allowNull: false
        },
        previousSchoolName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateOfAdmisison: {
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
            type: DataTypes.STRING,
            allowNull: true
        },
        classTeacher: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'Master',
        tableName: 'master'
    }
);

export default Master;
