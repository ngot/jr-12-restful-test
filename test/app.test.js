"use strict";

const assert = require("assert");
const supertest = require("supertest");

const app = require("../src/app");

describe("Restful demo application test", () => {
  describe("GET", () => {
    it("get should response 404 correctly", async () => {
      await supertest(app.callback())
        .get("/user/60377d8f6d42d7d1a7b2b321")
        .expect(404);
    });

    it("get should response 400 correctly", async () => {
      await supertest(app.callback()).get("/user/60").expect(400);
    });

    it("get should response 200 correctly", async () => {
      const user = {
        name: "jack",
        age: 23,
      };
      let res = await supertest(app.callback())
        .post("/user")
        .send(user)
        .expect(200);
      const { _id } = res.body;
      res = await supertest(app.callback())
        .get(`/user/${_id}`)
        .expect(200);
      assert(user.name === res.body.name);
      assert(user.age === res.body.age);
    });
  });
});
