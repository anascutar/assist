/// <reference types="cypress" />

//GET

describe("WElcome", () => {
  it("GET WElcome", () => {
    cy.request(
      "GET",
      "https://assist-august-2021-be1.azurewebsites.net/Welcome")
      .then((res) => {
        expect(res.status).equal(200)
        expect(res.body).equal('Welcome to Assist Internship 2021')
        cy.log(res);
      });
  });
});
