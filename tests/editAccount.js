let accountPage = {}

let editTest = require('../testAssests/edit')
let addSearch = require('../testAssests/addSearch')

module.exports = {
    beforeEach: browser=> {
        accountPage = browser.page.pageObjects()
        accountPage.navigate()
            .expect.element('@banner').to.be.visible.before(10000)
    },
    after: browser=> {
        browser.end()
    },
//Link to test case: https://dmutah.atlassian.net/browse/QO2C-102
'Edit an existing account': browser => {
    accountPage
        editTest(accountPage, 'carsonhatch94@gmail.com', '123456789', 'Jeff', 'Lebowski', 'L.A.', "I'm the Dude. So that's what you call me. That, or His Dudeness … Duder … or El Duderino, if, you know, you're not into the whole brevity thing.")
},
//Link to test case: https://dmutah.atlassian.net/browse/QO2C-109 
'Add item and search for it': browser => {
    accountPage
        addSearch(accountPage, 'Towel', 'Very soft, very nice', '111 W 111 S', 'Provo', 'UT', '84604', '100', 'Must clean')

}
}