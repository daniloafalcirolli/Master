const { Model, DataTypes } = require('sequelize');

class ambiente extends Model{
    static init(datacon) {
        super.init({
            id_tipo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'tipo_ambiente',
                    key: 'id',
                }
            },
            capacidade: {
                type: DataTypes.INTEGER(75),
                allowNull: false,
            },
        },{
            sequelize: datacon,
            tableName: 'ambientes',
            modelName: 'ambiente',
        });
    }
    static associate(models) {
        ambiente.belongsTo(models.tipoAmbiente, {foreignKey: 'id'});
        ambiente.hasMany(models.ambiente, {foreignKey: 'id_ambiente'});
        ambiente.hasMany(models.agenda, {foreignKey: 'id_agenda'});
    }
};
module.exports = ambiente;