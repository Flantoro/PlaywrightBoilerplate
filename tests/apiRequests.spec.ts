import { test, expect } from "@playwright/test";
const ApiHelper = require("../helpers/APIHelper.ts");

test("get request reqres", async ({ page }) => {
  const api = new ApiHelper("https://reqres.in");

  const getResponse = await api.get("/api/users/2");
  console.log("GET /api/users/2:", getResponse);
  expect(getResponse.status).toBe(200);
});

test("post request reqres", async ({ page }) => {
  const api = new ApiHelper("https://reqres.in");

  const postResponse = await api.post("/api/users", {
    name: "morpheus",
    job: "leader",
  });
  console.log("POST /api/users/2:", postResponse);
  expect(postResponse.status).toBe(201);
});

test("put request reqres", async ({ page }) => {
  const api = new ApiHelper("https://reqres.in");

  const putResponse = await api.put("/api/users/2", {
    name: "morpheus",
    job: "zion resident",
  });
  console.log("PUT /api/users/2:", putResponse);
  expect(putResponse.status).toBe(200);
});

test("delete request reqres", async ({ page }) => {
  const api = new ApiHelper("https://reqres.in");

  const deleteResponse = await api.delete("/api/users/2");
  console.log("DELETE /api/users/2:", deleteResponse);
  expect(deleteResponse.status).toBe(204);
});
