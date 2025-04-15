import { describe,it,expect } from "vitest";

import { app } from "..";

import request from "supertest";


describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const response = await request(app)
            .post("/sum")
            .send({ a: 1, b: 2 });

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            answer: 3,
            id: expect.any(Number),
          });
          
    }
    );
})
