class HomePage{

    elements={
        searchField :()=> cy.get('[data-cy="search-keyword"]'),
        searchTerm:()=>  cy.get('[data-cy="search-keyword"]'),
        searchButton:()=> cy.get('[data-cy="search-trigger-button"]'),
    }


    validateSearchFieldEnabledVisible(){
        this.elements.searchField().should("be.enabled").should("be.visible");
    }
    getSearchField(){
        return this.elements.searchField();
    }
    validateURL(){
        cy.url().should('eql', "https://george.fat3.sparkasse.at/index.html?at=c#/overview")
    }

    enterSearchTerm(searchTerm){
        this.elements.searchTerm().type(searchTerm);
    }
    clickOnSearchButton(){
        this.elements.searchButton().click();
    }
}
export default HomePage;