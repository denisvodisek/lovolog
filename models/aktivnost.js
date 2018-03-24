
const knexFile = require('../knexfile');
const config = knexFile.development;
const knex = require('knex')(config);

const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

const Oseba = require('../models/oseba');

const Aktivnost = bookshelf.Model.extend({
    tableName: 'aktivnost',
    oseba: function() {
        return this.belongsToMany(Oseba);
    }
});

module.exports = Aktivnost