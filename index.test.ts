import { describe, expect, it } from "bun:test";

import returnHelloWorld from "./index";

describe("index", () => {
  describe("returnHelloWorld", () => {
    it("should return Hello World!", () => {
      expect(returnHelloWorld()).toEqual("Hello World!");
    });
  })
});
