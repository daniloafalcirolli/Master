const { Model, DataTypes } = require('sequelize');

class curso extends Model{
    static init(datacon) {
        super.init({
            curso: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            id_componente: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'componentes',
                    foreignKey: 'id'
                }
            },           
        },
        {
            sequelize: datacon,
            tableName: 'cursos',
            modelName: 'curso',
        }
        );
    }
    static associate(models) {
        curso.hasMany(models.cursoComponente, {foreignKey: 'id_curso'});
        curso.hasMany(models.turma, {foreignKey: 'id_curso'});
    }

}
module.exports = curso;