import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();
  });
});
