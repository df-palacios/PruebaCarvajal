"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('libreta', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    //logging:false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map