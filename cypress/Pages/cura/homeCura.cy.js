class homeCura {
  elements = {
    makeAppointmentButton: () => cy.get("#btn-make-appointment"),
    userField: () => cy.get("#txt-username"),
    passField: () => cy.get("#txt-password"),
    logInButton: () => cy.get("#btn-login"),
  };

  clickMakeAppointment() {
    this.elements.makeAppointmentButton().click();
  }

  typeUsername(username) {
    this.elements.userField().type(username);
  }

  typePassword(password) {
    this.elements.passField().type(password);
  }

  clickLogIn() {
    this.elements.logInButton().click();
  }
}
module.exports = new homeCura();
