import { createStore } from "../src/index";

it("should work", () => {
  const store = createStore({ string: "hii" });
  expect(store.getState().string).toEqual("hii");
});
