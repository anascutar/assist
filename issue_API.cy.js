/// <reference types="cypress" />

//GET

describe("Issues", () => {
  it("GET Isssues", () => {
    cy.request(
      "GET",
      "https://assist-august-2021-be1.azurewebsites.net/api/Issue"
    ).then((res) => {
      expect(res.status).equal(200);
      cy.log(res);
      expect(res.headers).to.have.property("server");
      expect(res.headers).to.have.property("content-type");
      expect(res.headers).to.have.property("transfer-encoding");
    });
  });

  it("POST ISSUE 1", () => {
    it("Status", () => {
      cy.request("https://assist-august-2021-be1.azurewebsites.net/api/Issu")
        .its("body")
        .should("have.status", 500);
    });
    it("Content-length", () => {
      cy.request("https://assist-august-2021-be1.azurewebsites.net/api/Issu")
        .its("headers")
        .should("have. content-length", 0);
    });
  });

  it("DELETE ISSUE", () => {
    it("DELETE", () => {
      cy.request(
        "DELETE",
        "https://assist-august-2021-be1.azurewebsites.net/api/Issue/bb9570b1-6634-4f2b-6141-08da61aac3e5"
      ).then((res) => {
        expect(res.status).equal(204);
        expect(res.body).equal("Issue deleted");
        cy.log(res);
        expect(res.headers).to.have.property("server");
      });
    });
  });

  //NU FUNCTIONEAZA
  // it("PUT ISSUE", () => {
  //   cy.request({
  //     mehtod: "PUT",
  //     url: "https://assist-august-2021-be1.azurewebsites.net/api/Issue/bb9570b1-6634-4f2b-6141-08da61aac3e5",
  //   }).then((response) => {
  //     expect(response.status).to.equal(200);
  //   });
  // });
});
