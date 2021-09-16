//This command is to drag  an element from one location and drop it at new location
Cypress.Commands.add('dragTo', function (sourceLocator, targetLocator) {
   const dataTransfer = new DataTransfer()
    cy.get(sourceLocator).trigger("dragstart",{dataTransfer})
    .trigger("dragleave")

    cy.get(targetLocator).trigger("dragenter",{dataTransfer})
    .trigger("dragover",{dataTransfer})
    .trigger("drop",{dataTransfer})
    .trigger("dragend")
})
