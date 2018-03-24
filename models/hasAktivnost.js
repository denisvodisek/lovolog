/*
const knexFile = require('../knexfile');
const config = knexFile.development;
const knex = require('knex')(config);

const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

const Aktivnost = require('../models/aktivnost');
const Oseba = require('../models/oseba');

const hasAktivnosti = bookshelf.Model.extend({
    tableName: 'hasAktivnosti',
    oseba: function () {
        return this.hasMany(Oseba);
    },
    aktivnost: function () {
        return this.hasMany(Aktivnost);
    }
});
*/
//module.exports = hasAktivnosti