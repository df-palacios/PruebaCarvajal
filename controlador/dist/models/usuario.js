"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    nombres: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    telefonos: {
        type: sequelize_1.DataTypes.INTEGER
    },
    celular: {
        type: sequelize_1.DataTypes.INTEGER
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    ciudad: {
        type: sequelize_1.DataTypes.STRING
    },
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map