const { Model, DataTypes } = require('sequelize');

class turma extends Model{
    static init(datacon) {
        super.init({
            curso: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            alunos: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
        turma.hasMany(models.turmaComponente, {foreignKey: 'id_turma'});
    }
}
module.exports = turma;