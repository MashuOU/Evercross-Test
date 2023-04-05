'use strict';
const { hashPassword } = require('../helpers')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require('../dummydata/user.json').map(x => {
      x.password = hashPassword(x.password)
      x.createdAt = new Date()
      x.updatedAt = new Date()
      return x
    })
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
