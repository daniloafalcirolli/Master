const { Model, DataTypes } = require('sequelize');

class reserva extends Model{
    static init(datacon) {
        super.init({
            data: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            sala: {
                type: DataTypes.STRING(20),
                allowNull: false,
                },
            duracao: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            id_usuario: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'usuarios',
                    key: 'id',
                }
            }
        },
        {
            sequelize: datacon,
            tableName: 'reservas',
            modelName: 'reserva',
        }
        );
    }
    
    static associate(models) {
        reserva.belongsTo(models.usuario, {foreignKey: 'id'});
    }
} 
//QUANDO EXPORTA AS CLASSE, TUDO QUE ESTA DENTRO DELA É EXPORTADO
module.exports = reserva;