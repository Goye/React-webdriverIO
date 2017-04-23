'use strict';
/*global browser*/

var page = require('./page');

var appPage = Object.create(page, {
    /** ----- Define elements ----- */
    selector: { get: () => browser.element('#form-signin [type="text"]') },
    /** ----- Define or overwrite page methods ----- */
    open: { value: function() {
        page.open.call(this);
    } },

    customMethod: { value: function() {
        //TODO This is where the magic happens
    } }
});

module.exports = appPage;
