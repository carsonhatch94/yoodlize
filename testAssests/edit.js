/**
* Edits an account's name, location, and description
*
* @param {object} pageObject the page object currently being used for employee manager
* @param {string} email the email to be used in the account
* @param {string} password the password to be used in the account
* @param {string} newFirst a new first name
* @param {string} newLast a new last name
* @param {string} newLocation a new city
* @param {string} newDescription a brief description of the account owner
*/
module.exports = (pageObject, email, password, newFirst, newLast, newLocation, newDescription) => {
    pageObject
        .pause(2000)
        .click('@loginMainMenu')
        .pause(500)
        .setValue('@emailPopUp', email)
        .setValue('@passPopUp', password)
        .click('@loginPopUp')
        .expect.element('@picture').to.be.visible.before(1000)
    pageObject
        .click('@picture')
        .click('@editProfile')
        .clearValue('@firstName')
        .clearValue('@lastName')
        .clearValue('@location')
        .clearValue('@description')
        .click('@firstName')
        .setValue('@firstName', newFirst)
        .click('@lastName')
        .setValue('@lastName', newLast)
        .click('@gender')
        .click('option[value="Other"]')
        .click('@birthMonth')
        .click('option[value="3"]')
        .click('@birthDay')
        .click('option[value="29"]')
        .click('@birthYear')
        .click('option[value="1986"]')
        .click('@location')
        .setValue('@location', newLocation)
        .click('@description')
        .setValue('@description', newDescription)
        .click('@editSave')
        .pause(500)
}