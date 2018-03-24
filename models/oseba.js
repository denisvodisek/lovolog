const knexFile = require('../knexfile');
const config = knexFile.development;
const knex = require('knex')(config);

const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

const Aktivnost = require('../models/aktivnost');

const Oseba = bookshelf.Model.extend({
    tableName: 'oseba',
    aktivnost: function() {
        return this.belongsToMany(Aktivnost);
    }
});

module.exports = Oseba;