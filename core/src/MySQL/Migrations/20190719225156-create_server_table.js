'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        queryInterface.createTable('servers', {
            id: Sequelize.BIGINT,
            uuid: Sequelize.UUIDV1,
            name: Sequelize.STRING(200),
            ipAddress: Sequelize.STRING(50),
            description: Sequelize.STRING(500),
            portableMode: Sequelize.BOOLEAN
        });
        queryInterface.addIndex('servers', {id: true})
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
