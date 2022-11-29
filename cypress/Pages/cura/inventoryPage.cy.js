class inventoryPage {
  elements = {
    titleCura: () => cy.get("#h1"),
    makeAppointmentCura: () => cy.get("h2"),
    boockedAppointmentCura: () => cy.get("h2"),
  };
}

module.exports = new inventoryPage();
