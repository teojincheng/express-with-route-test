const request = require("supertest");
const app = require("./app");
const data = require("./data");

const expectedData = [
  {
    id: 1,
    type: "FRUIT",
    name: "Banana",
    color: "yellow"
  },
  {
    id: 2,
    type: "FRUIT",
    name: "Tomato",
    color: "red"
  }
];

describe("app.js", () => {
  it("should 1 equals 1", () => {
    expect(1).toBe(1);
  });

  it("GET / should respond with Welcome to my server", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("welcome");
      });
  });

  it("async await GET / should repond with welcome to my server", async done => {
    const response = await request(app)
      .get("/")
      .expect(200);
    expect(response.text).toEqual("welcome");

    done();
  });

  it("GET /food should respond with all data", async () => {
    const response = await request(app)
      .get("/food")
      .expect(200);
    expect(response.body).toStrictEqual(data);
  });

  it("GET /food?type=FRUIT should respond with fruit", async () => {
    const response = await request(app)
      .get("/food?type=FRUIT")
      .expect(200);
    expect(response.body).toStrictEqual(expectedData);
  });

  it("GET / books should retrieve a list of books", async () => {
    const response = await request(app)
      .get("/books")
      .expect(200);
    expect(response.text).toEqual("retrieved books");
  });

  it("GET / books/1/2 should retrieve book info and user id", async () => {
    const response = await request(app)
      .get("/books/1/2")
      .expect(200);
    expect(response.text).toEqual(
      "You requested information on book 1 and userId 2"
    );
  });
});
