const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
    it("should return all movies", async () => {
        // code test here
        const response = await request(app).get("/api/movies");
        
        // ensure response is in json format
        expect(response.headers["content-type"]).toMatch(/json/);
        // ensure response status is 200
        expect(response.status).toEqual(200);
    });
});

describe("GET /api/movies/:id", () => {
    it("should return the movie related to id = 1", async () => {
        // code test here
        const movieId = 1;

        const response = await request(app).get(`/api/movies/${movieId}`);

        // ensure response is in json format
        expect(response.headers["content-type"]).toMatch(/json/);

        // ensure response status is 200
        expect(response.status).toEqual(200);

        // ensure the response body matches the expected movie with the specified ID
        expect(response.body.id).toEqual(movieId);

        // ensure the response body is an object with the correct movie properties
        expect(response.body).toEqual({
            id: expect.any(Number),
            title: expect.any(String),
            director: expect.any(String),
            year: expect.any(String),
            color: expect.any(Boolean),
            duration: expect.any(Number),
          });
    });
});

describe("GET /api/movies/:id 404", () => {
    it("should return response status 404 when id = 0", async () => {
        // code test here
        const movieId = 0;

        const response = await request(app).get(`/api/movies/${movieId}`);

        // ensure response status is 404
        expect(response.status).toEqual(404);
    });
});