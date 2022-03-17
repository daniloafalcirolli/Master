const { Model, DataTypes } = require('sequelize');

class turma extends Model{
    static init(datacon) {
        super.init({
            curso: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            alunos: {
                type: DataTypes.INT(75),
                allowNull: false,
            },
            componentes: {
                type: DataTypes.JSON(60000),
                allowNull: false,
                references: {
                    model: 'componete',
                    key: 'id',
                }
            }
        },
        {
            sequelize: datacon,
            tableName: 'turmas',
            modelName: 'turma',
        }
        );
    }
    static associate(models) {
        turma.hasMany(models.componetes, {foreignKey: 'id_componete'});

    }
    
}
module.exports = turma;