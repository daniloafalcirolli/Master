const { Model, DataTypes } = require('sequelize');

class turmaComponente extends Model{
    static init(datacon) {
        super.init({
            id_turma: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'turmas',
                    foreignKey: 'id'
                }
            },
            id_componente: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'componentes',
                    foreignKey: 'id'
                }
            }
        },
        {
            sequelize: datacon,
            tableName: 'turma_componentes',
            modelName: 'turmaComponente',
        }
        );
    }
    static associate(models) {
        turma.belongsTo(models.componete, {foreignKey: 'id'});
        turma.belongsTo(models.turmas, {foreignKey: 'id'});
    }
}
module.exports = turmaComponente;