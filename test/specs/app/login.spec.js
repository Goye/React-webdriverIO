//var expect = require('chai').expect;
var appPage = require('../../pages/app.page');

describe('App Scenarios', () => {
    beforeEach(() => {
        appPage.open();
    });

    describe('Given the username and password correctly', () => {
        it('When the user presses the sign-in button', () => {
            //TODO add expect
        });
    });

    describe('Given the username and password erroneously', () => {
        it('When the user presses the sign-in button', () => {
            //TODO add expect
        });
    });

});
