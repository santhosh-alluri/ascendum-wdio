import * as dotenv from "dotenv";
dotenv.config();

class Page {
  public open() {
    browser.url(process.env.URL);
  }

  public static waitForElementTobeVisible(
    elementToVisible: WebdriverIO.Element
  ) {
    elementToVisible.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Element not Displayed",
    });
  }

  public getMainHeaders() {
    return $$('.ag-header-row.ag-header-row-column-group>div> .ag-header-group-cell-label>.ag-header-group-text');
  }

  public getSubHeaders() {
    return $$('.ag-header-row.ag-header-row-column>div .ag-header-cell-text');
  }

  public getSidebar() {
    return $$('.ag-virtual-list-container.ag-column-select-virtual-list-container>div .ag-column-select-column-label');
  }

  public getSidebarMain(){
    return $$('.ag-virtual-list-container.ag-column-select-virtual-list-container>div')
  }
  
  public getSidebarbutton(){
    return $('.ag-column-select-header-icon>span');
  }

  public getScroolBar(){
    return $('.ag-body-horizontal-scroll-viewport');
  }

  public getFiletBox() {
    return $('[aria-label="Filter Columns Input"]')
  }

  public getFilterTextBox() {
    return $('[aria-label="Name Filter Input"]');
  }

  public getFilterResult() {
    return $$('.ag-center-cols-container>div [col-id="name"] .ag-cell-value');
  }

  public getOctBox() {
    return $$('.ag-header-row.ag-header-row-floating-filter button')[9]
  }

  public filterDropdownValue() {
    return $('.ag-picker-field-display')
  }

  public filterSearchbox() {
    return $('[placeholder="Filter..."]');
  }
}

export default new Page();

