/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('helmets_list', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    subhead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false
  });
};
