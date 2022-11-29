class makeAppointmentCura {
  elements = {
    facilityField: () => cy.get("#combo_facility"),
    visitDateField: () => cy.get("#txt_visit_date"),
    commentField: () => cy.get("#txt_comment"),
    bookAppointmentButton: () => cy.get("#btn-book-appointment"),
  };

  selectFacility(facility) {
    this.elements.facilityField().type(facility);
  }

  typeVisitDate(date) {
    this.elements.visitDateField().type(date);
  }

  typeComments(comment) {
    this.elements.commentField().click({ force: true }).type(comment);
  }

  clickBookAppointment() {
    this.elements.bookAppointmentButton().click();
  }
}
module.exports = new makeAppointmentCura();
