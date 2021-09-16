/// <reference types="Cypress" />

import CommonActions from '../support/pageObjects/pageActions/commonActions'
import IframePage from '../support/pageObjects/pageActions/iIframePageActions'
import DragAndDropPage from '../support/pageObjects/pageActions/dragAndDropPageActions'
const commonActions = new CommonActions()
const iframePage = new IframePage()
const dragAndDropPage = new DragAndDropPage()

before(function()
{
    cy.fixture('commonData').then(function(data){
        this.data=data
    })
})

describe('Validate Herokuapp suite', function(){

    it('Should verify Herokuapp - Iframe functinality',function(){
        //fetching the test data used for the current test - iFrame Page
        cy.fixture('iframePageData').then(function (iframePageData) {
            //navigation to the URL
            cy.visit(Cypress.env('baseURL')+'iframe')
            //validation of the page title
            commonActions.validatePageTitle(this.data.pageTitle)
            //validation of page header
            commonActions.validatePageHeader(iframePageData.header)
            //entering the text to the iframe space provider
            iframePage.enterText(iframePageData.text)
            //formatting the text
            iframePage.formatText(iframePageData.formatType)
            //validating the format of the text
            iframePage.validateFormatedText(iframePageData.formatType,iframePageData.text)
        })
    })

    it('Should verify Herokuapp - Drag and Drop functinality',function(){
        //navigation to the URL
        cy.visit(Cypress.env('baseURL')+'drag_and_drop')   
        //validation of the page title
        commonActions.validatePageTitle(this.data.pageTitle)
        //validation of page header
        commonActions.validatePageHeader('Drag and Drop')
        //swapping the containers using drag and drop and validate the positions
        dragAndDropPage.validatePositionAfterDragContainer1AndDropAtContainer2()     
    })
})
