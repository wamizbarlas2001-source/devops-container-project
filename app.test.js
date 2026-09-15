const request = require("supertest");
const app = require("./app");

describe("DevOps Container Project API", () => {

    test("GET / should return 200 and application message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("DevOps Container Project");
    });

    test("GET /health should return UP status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");
    });

});