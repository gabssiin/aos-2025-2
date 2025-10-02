const getTarefasModel = (sequelize, { DataTypes }) => {
  const Tarefas = sequelize.define("Tarefas", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Tarefas.associate = (models) => {
    Tarefas.belongsTo(models.User);
  };

  return Message;
};

export default getTarefasModel;
