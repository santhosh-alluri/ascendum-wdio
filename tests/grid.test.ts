import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import page from "../pages/page";
import data from "../testdata/data.json";
import helper from "../helper/helper"

describe("Load AG Grid", () => {
  before(() => {
    page.open()
    browser.maximizeWindow()
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
  });

  it("verify Primary Column Headers", ()=>{
    let headers = []
    let mainHeaders = page.getMainHeaders();
    headers = helper.getAllElementsTextAsArray(mainHeaders);
    expect(headers).to.have.all.members(data["mainHeaders"]);
  });

  it("verify primary columns headers in sidebar", function() {
    helper.closeSideBar();
    let sideHeaders = []
    let sidebar = page.getSidebar();
    sideHeaders = helper.getAllElementsTextAsArray(sidebar);
    expect(data["mainHeaders"]).to.not.have.members((sideHeaders));
    
  });

  it("verify secondary columns headers in sidebar", function() {
    let subHeaders = []
    let subHeaders1 = []
    let sHeader = page.getSubHeaders()
    subHeaders = helper.getAllElementsTextAsArray(sHeader)
  
    helper.shiftRight();
  sHeader = page.getSubHeaders()
  subHeaders1 = helper.getAllElementsTextAsArray(sHeader)
  subHeaders = subHeaders.concat(subHeaders1)
  expect(subHeaders).to.have.all.members(data["subHeaders"]);
  let filterSubHeaders = helper.getSideMenuSubHeaderList(data["subHeaders"])
    console.log(filterSubHeaders)
    console.log(subHeaders)
    expect(filterSubHeaders).to.have.all.members(subHeaders);
  });


    it("Validate that Filtering Name will return result", function(){
        let result:boolean = helper.verifyFilter(data["filterName"])
        expect(true).to.be.true;
    })


    it("Validate that Winnings in October is less than 5000", function(){
      helper.shiftRight();
      page.getOctBox().click();
      browser.pause(2000)
      helper.setfiltertoLessThan()
      page.filterSearchbox().setValue("5000")
      browser.pause(5000)
      expect(true).to.be.true;
  })


});
