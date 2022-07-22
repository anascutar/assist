/// <reference types="cypress" />

//GET

describe("Issues", () => {
    it("GET Isssues", () => {
      cy.request(
        "GET",
        "https://assist-august-2021-be1.azurewebsites.net/api/Issue")
        .then((res) => {
          expect(res.status).equal(200)
        expect(res.body).to.not.be.null
       
        });
    });


    it("POST ISSUES", ()=>{
        let item ={
            "ownerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "title": "string",
            "description": "string",
            "gpsLat": 0,
            "gpsLng": 0,
            "location": "string",
            "status": "string",
            "isPrivate": true,
            "isValidated": true,
            "dateCreated": "2022-07-22",
            "dateUpdated": "2022-07-22",
            "attachments": [
              {
                "image": "string"
              }
            ],
            "priority": "string"
          }
        cy.request("POST", "https://assist-august-2021-be1.azurewebsites.net/api/Issue",item)
        .then((res) => {
            expect(res.status).equal(200)
          
          });
    })
  });
  