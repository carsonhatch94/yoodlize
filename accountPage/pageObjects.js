module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        banner: 'div[class="navbar-collapse collapse"]',
        loginMainMenu: {
            selector: '//span[contains(text(), "Log in")]',
            locateStrategy: 'xpath',
        },
        loginPopUp: 'button[type="submit"]',
        emailPopUp: 'input[placeholder="Email Address"]',
        passPopUp: 'input[placeholder="Password"]',
        picture: 'img[class="sc-hrWEMg dGaker"]',
        editProfile: {
            selector: '//span[contains(text(), "Edit Profile")]',
            locateStrategy: 'xpath'
        },
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        location: 'input[name="location"]',
        description: 'textarea',
        editSave: {
            selector: '//button[contains(text(), "Save")]',
            locateStrategy: 'xpath'
        },
        listStuff: {
            selector: '//span[contains(text(), "List Your Stuff")]',
            locateStrategy: 'xpath'
        },
        getStarted: {
            selector: '//button[contains(text(), "GET STARTED")]',
            locateStrategy: 'xpath'
        },
        itemTitle: 'input[placeholder="Title"]',
        itemDescpn: 'textarea',
        itemCat: 'select[name="roomType"]',
        saveNextAddress: {
            selector: '//button[contains(text(), "Save & Next: Address")]',
            locateStrategy: 'xpath'
        },
        streetAdd: 'input[placeholder="Street Address"]',
        city: 'input[placeholder="City"]',
        state: 'input[placeholder="State"]',
        zip: 'input[placeholder="Zipcode"]',
        saveNextPrice: {
            selector: '//button[contains(text(), "Save & Next: Price")]',
            locateStrategy: 'xpath'
        },
        dailyRate: 'input[type="number"]',
        saveNextRules: {
            selector: '//button[contains(text(), "Save & Next: Rules")]',
            locateStrategy: 'xpath'
        },
        rule: 'input[placeholder="Enter a rule here"]',
        addRule: {
            selector: '//button[contains(text(), "ADD")]',
            locateStrategy: 'xpath'
        },
        saveNextAvailability: {
            selector: '//button[contains(text(), "Next: Availability")]',
            locateStrategy: 'xpath'
        },
        saveNextPhoto: {
            selector: '//button[contains(text(), "Next: Photos")]',
            locateStrategy: 'xpath'
        },
        photoField: 'input[type="file"]',
        saveNextReview: {
            selector: '//button[contains(text(), "Save & Next: Review")]',
            locateStrategy: 'xpath'
        },
        checkBox: 'input[type="checkbox"]',
        publish: {
            selector: '//button[contains(text(), "Publish")]',
            locateStrategy: 'xpath'
        },
        gender: 'select[name="gender"]',
        birthMonth: 'select[name="month"]',
        birthDay: 'select[name="day"]',
        birthYear: 'select[name="year"]',
        searchBar: 'input[placeholder="Search for an item"]',
        searchButton: 'i[class="fal fa-search"]',
        searchResults: 'div[class=Search-searchResultContainer-33ivj]',
        topCheck: '#rebass-provider > div > div:nth-child(2) > div > div > div > div.mt-l > div > div.sc-bdVaJa.sVIKN > div > div:nth-child(5) > div:nth-child(5) > div.icheckbox_minimal-blue > ins',
        bottomCheck: '#rebass-provider > div > div:nth-child(2) > div > div > div > div.mt-l > div > div.sc-bdVaJa.sVIKN > div > div:nth-child(5) > div:nth-child(8) > div.icheckbox_minimal-blue > ins'
    }
}