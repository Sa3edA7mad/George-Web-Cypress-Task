class ResultsPage {
    elements = {
        numberOfResults: () => cy.get('.g-card-footer-label'),
        tableBody: () => cy.get('tbody'),
        row: () => cy.get('tbody > tr'),
    }

    validateSearchTermInEachResult(searchTerm) {
        var numOfResults;
        cy.get('.g-card-footer-label').then(($numOfRecords) => {
            numOfResults = $numOfRecords.text();
            cy.log(numOfResults);
            numOfResults = numOfResults.substring(0, numOfResults.indexOf(' '));
            cy.log(numOfResults);
            cy.get('tbody').children("").should('have.length', numOfResults)
            for (let i = 0; i < numOfResults; i++) {
                cy.get('tbody > tr').eq(i).click();
                cy.get('tbody > tr').eq(i).find('span [data-cy="category-badge"]').should('contain', searchTerm);
            }
        })
    }

}

export default ResultsPage;