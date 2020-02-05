const app = require("./requireJson");
const request = require("supertest");

describe("requireJson.js", () => {
  it("should 1 equals 1", () => {
    expect(1).toBe(1);
  });

  it("POST/ should respond with 400 and error message when sending string", async done => {
    const response = await request(app)
      .post("/")
      .send("hello")
      .expect(400);
    expect(response.text).toBe("Server wants application/json!");
    done();
  });

  it("POST should respond with 200 and correct message when sending JSON", async () => {
    const testName = "jack";
    const { text } = await request(app)
      .post("/")
      .send({ name: testName })
      .expect(200);
    expect(text).toBe("Thanks for your json!!!! name is " + testName);
  });
});
