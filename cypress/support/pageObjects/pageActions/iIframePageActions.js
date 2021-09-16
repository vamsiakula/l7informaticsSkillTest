/// <reference types="Cypress" />

const iframePageElements = require("../pageElements/iframePageElements")

class IframePage{

    /**
     * This method is to enter the text in the iframe space provider
     * @param text - the text to enter in the iframe space provider
     */
    enterText(text){
        cy.get(iframePageElements.IFRAME).within(function($iframe){
            const frame = $iframe.contents().find(iframePageElements.TEXTBOX)
            cy.wrap(frame).children('p').clear().should('not.exist')
            cy.wrap(frame).type(text).should('have.text',text)
        })
    }

    /**
     * This method clicks the type of the format from the Format menu
     * @param formatType - the format type used to format the text
     */
    formatText(formatType){
        cy.get(iframePageElements.IFRAME).within(function($iframe){
            const frame = $iframe.contents().find(iframePageElements.TEXTBOX)
            cy.wrap(frame).type('{selectall}')
        })
        cy.get(iframePageElements.FORMAT).contains('Format').click()
        cy.get(iframePageElements.FORMAT_TYPE).contains(formatType).click()
    }

    /**
     * This method is to validate whether the text formatted correctly
     * and this is developed only for four format types Bold, Italic, Underline and Strikethrough
     * @param formatedType - the type of format used to format the text
     * @param text - the text in the iframe space provider
     */
    validateFormatedText(formatedType,text){
        let locator
        switch(formatedType) {
            case 'Bold':
                locator= iframePageElements.FORMAT_BOLD 
                break;
            case 'Italic':
                locator= iframePageElements.FORMAT_ITALIC
                break;
            case 'Underline':
                locator= iframePageElements.FORMAT_UNDERLINE
                break;
            case 'Strikethrough':
                locator= iframePageElements.FORMAT_STRIKETHROUGH
                break;
            
        }
        cy.get(iframePageElements.IFRAME).within(function($iframe){
            const frame = $iframe.contents().find(locator)
            cy.wrap(frame).should('be.visible')
            cy.wrap(frame).should('contain',text)
        })
    }

}
export default IframePage