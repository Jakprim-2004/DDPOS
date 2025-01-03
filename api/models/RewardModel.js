const conn = require("../connect");
const { DataTypes } = require("sequelize");

const RewardModel = conn.define("Reward", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    pointsCost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    userId: {
        type: DataTypes.BIGINT
    },
}, {
    tableName: 'Rewards',
    freezeTableName: true
});

RewardModel.sync({ alter: true });

module.exports = RewardModel;
