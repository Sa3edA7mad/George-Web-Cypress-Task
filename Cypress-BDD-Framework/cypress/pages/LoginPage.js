class LoginPage {
  elements = {
    usernameInput: () =>cy.get('#user'),
    loginBtn: () => cy.get("#submitButton")
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }


  clickLogin() {
    this.elements.loginBtn().click();
  }

  usernameLogin(username){
    this.elements.usernameInput().type(username);
    this.elements.loginBtn().click();
  }
}

export default LoginPage;
