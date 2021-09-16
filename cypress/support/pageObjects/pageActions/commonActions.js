const commonElements = require("../pageElements/commonElements")

class CommonActions{

    /**
     * This method is to validate the title of the visited page
     * @param title - the title of the page to validate
     */
    validatePageTitle(title){
        cy.title().should('include',title)
    }

    /**
     * This method is to validate the header of the current page
     * @param header - the header of the page to validate
     */
    validatePageHeader(header){
        cy.get(commonElements.PAGE_HEADER).then(function(element){
            const text=  element.text()
            cy.log('The Page Header is: '+text)
            assert.isTrue(text.includes(header),"Text matched")       
        })
    }


}
export default CommonActions