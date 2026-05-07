import { describe, expect, it } from "vitest";

import { API_URL } from "./env";

describe("env config", () => {
  it("exports the frontend API base url", () => {
    expect(API_URL).toBe("/api");
  });
});
