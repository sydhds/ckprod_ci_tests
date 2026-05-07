import { describe, expect, it } from "vitest";

import Root, { Layout, links } from "./root";

describe("root", () => {
  it("declares the favicon link", () => {
    expect(links()).toEqual([
      { rel: "icon", href: "/vite.svg", type: "image/svg+xml" },
    ]);
  });
});
