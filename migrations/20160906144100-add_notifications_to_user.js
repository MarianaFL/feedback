'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Users', 'notifications', Sequelize.BOOLEAN);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'notifications')
  }
};
