import { expect } from "chai";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("should display the grids", () => {
    browser.pause(10000);
  });
});
