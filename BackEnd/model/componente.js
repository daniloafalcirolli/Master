const { Model, DataTypes } = require('sequelize');

class componente extends Model{
    static init(datacon) {
        super.init({
            materia: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            carga_horaria: {
                type: DataTypes.FLOAT(7, 5),
                allowNull: false,
            },
            sequelize: datacon,
            tableName: 'componetes',
            modelName: 'componente',
        })
    }
}
module.exports = componente;