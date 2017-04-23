/*global browser*/

function Page () {
}

Page.prototype.open = function () {
    browser.url('/');
};

module.exports = new Page();
