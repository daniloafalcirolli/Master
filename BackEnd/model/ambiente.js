const { Model, DataTypes } = require('sequelize');

class ambiente extends Model{
    static init(datacon) {
        super.init({
            id_tipo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'tipoAmbiente',
                    key: 'id',
                }
            },
            capacidade: {
                type: DataTypes.INTEGER(75),
                allowNull: false,
            },
        
            sequelize: datacon,
            tableName: 'ambientes',
            modelName: 'ambiente',
        });
    }
    static associate(models) {
      ambiente.hasMany(models.tipoAmbiente, {foreignKey: 'id_tipo'});
    }
};
module.exports = ambiente;