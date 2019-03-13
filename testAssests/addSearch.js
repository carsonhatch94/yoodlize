/**
* Adds and item and then searches for it
*
* @param {object} pageObject the page object currently being used for employee manager
* @param {string} itemTitle title of new object
* @param {string} itemDescpn description (at least 10 characters)
* @param {string} streetAdd street address
* @param {string} city city name
* @param {string} state state
* @param {string} zip zip code
* @param {string} dailyRate daily rate for item
* @param {string} rule create a rule for the item
*/
module.exports = (pageObject, itemTitle, itemDescpn, streetAdd, city, state, zip, dailyRate, rule) => {
    pageObject
        .pause(500)
        .click('@listStuff')
        .pause(500)
        .click('@getStarted')
        .click('@itemTitle')
        .setValue('@itemTitle', itemTitle)
        .click('@itemDescpn')
        .setValue('@itemDescpn', itemDescpn)
        .click('@itemCat')
        .pause(500)
        .click('option[value="95"]')
        .pause(500)
        .click('@saveNextAddress')
        .pause(500)
        .click('@streetAdd')
        .setValue('@streetAdd', streetAdd)
        .click('@city')
        .setValue('@city', city)
        .click('@state')
        .setValue('@state', state)
        .click('@zip')
        .setValue('@zip', zip)
        .click('@saveNextPrice')
        .pause(1000)
        .click('@dailyRate')
        .setValue('@dailyRate', dailyRate)
        .click('@saveNextRules')
        .pause(500)
        .click('@rule')
        .setValue('@rule', rule)
        .click('@addRule')
        .pause(500)
        .click('@saveNextAvailability')
        .pause(500)
        .click('@saveNextPhoto')
        .pause(500)
        .setValue('input[type="file"]', require('path').resolve('towels.jpg'))
        .pause(3000)
        .click('@saveNextReview')
        .pause(500)
        .click('@topCheck')
        .click('@bottomCheck')
        .pause(500)
        .click('@publish')
        .pause(500)
        .click('@searchBar')
        .setValue('@searchBar', itemTitle)
        .click('@searchButton')
        .pause(500)
        .expect.element('@searchResults').text.to.contain(itemTitle)
        pageObject.pause(2000)
}