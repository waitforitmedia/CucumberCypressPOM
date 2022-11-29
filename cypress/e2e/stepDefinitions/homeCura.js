import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import homeCura from "../../Pages/cura/homeCura.cy";
import inventoryPage from "../../Pages/cura/inventoryPage.cy";
import makeAppointmentCuraCy from "../../Pages/cura/makeAppointmentCura.cy";
beforeEach(() => {
  cy.visit("https://katalon-demo-cura.herokuapp.com/");
});

When("I Login Page Cura", () => {
  //cy.visit("https://katalon-demo-cura.herokuapp.com/");
  homeCura.clickMakeAppointment();
  homeCura.typeUsername("John Doe");
  homeCura.typePassword("ThisIsNotAPassword");
  homeCura.clickLogIn();

  inventoryPage.elements
    .makeAppointmentCura()
    .should("have.text", "Make Appointment");
});

Then("I Make Appointment", () => {
  makeAppointmentCuraCy.selectFacility("Tokyo CURA Healthcare Center");
  makeAppointmentCuraCy.typeVisitDate("11/11/2025");
  makeAppointmentCuraCy.typeComments("Testing Comments");
  makeAppointmentCuraCy.clickBookAppointment();

  inventoryPage.elements
    .boockedAppointmentCura()
    .should("have.text", "Appointment Confirmation");
});
