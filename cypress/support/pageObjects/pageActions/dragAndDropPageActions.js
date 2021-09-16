const dragAndDropPageElements = require('../pageElements/dragAndDropPageElements')

class DragAndDropPage{

    /**
     * This method is to validate swapping after dragging container1 and droping it in place of container2
     */
    validatePositionAfterDragContainer1AndDropAtContainer2(){
        cy.get(dragAndDropPageElements.COLUMN_A).then((element) => {
            if (element.text()=='A'){
                cy.get(dragAndDropPageElements.COLUMN_A).should('contain','A')
                cy.get(dragAndDropPageElements.COLUMN_B).should('contain','B')
                cy.dragTo(dragAndDropPageElements.COLUMN_A,dragAndDropPageElements.COLUMN_B)
                cy.get(dragAndDropPageElements.COLUMN_A).should('contain','B')
                cy.get(dragAndDropPageElements.COLUMN_B).should('contain','A')
            }
            else{
                cy.get(dragAndDropPageElements.COLUMN_A).should('contain','B')
                cy.get(dragAndDropPageElements.COLUMN_B).should('contain','A')
                cy.dragTo(dragAndDropPageElements.COLUMN_A,dragAndDropPageElements.COLUMN_B)
                cy.get(dragAndDropPageElements.COLUMN_A).should('contain','A')
                cy.get(dragAndDropPageElements.COLUMN_B).should('contain','B')
            }
        })
    }
}
export default DragAndDropPage