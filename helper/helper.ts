import page from "../pages/page"

class Helper {

    openSideBar(){
        let sidebarbutton = page.getSidebarbutton();
        let classname = sidebarbutton.getAttribute("class");
        if(classname.includes("ag-hidden")){
            sidebarbutton.click();
        }
    }

    closeSideBar() {
        let sidebarbutton = page.getSidebarbutton();
        let classname = sidebarbutton.getAttribute("class");
        if(!classname.includes("ag-hidden")){
            sidebarbutton.click();
        }
    }

    getAllElementsTextAsArray(selector){
        let result = []
        selector.forEach(element => {
            let headername = element.getText();
            if(headername){
                result.push(headername)
            }
            
        });
        return result;
    }

    getSubMenuFromSideBar(){
        let result = []
        let submenu = page.getSidebarMain();
        submenu.forEach(element => {
            if(!element.getAttribute("aria-label").includes("group")){
                console.log(element.getAttribute("class"))
                result.push(element.$('.ag-column-select-column-label').getText());
            }
        });
        return result;
    }

    setFileterNameOnSideBar(filtername) {
   //  page.getFiletBox().clearValue()
   browser.pause(2000);
     page.getFiletBox().setValue(filtername)
     browser.pause(2000)
     let result = this.getSubMenuFromSideBar();
     return result;
    }

    getSideMenuSubHeaderList(mainHeaders){
        let filterSubHeaders = []
        mainHeaders.forEach(element => {
          let result = this.setFileterNameOnSideBar(element);
          filterSubHeaders = filterSubHeaders.concat(result)
        });
        return [...new Set(filterSubHeaders)];;
    }

    verifyFilter(data){
        browser.refresh()
        data.forEach(element => {
            console.log(element)
            browser.pause(2000);
           // page.getFiletBox().clearValue();
            page.getFilterTextBox().setValue(element);
            browser.pause(2000);
            page.getFilterResult().forEach((ele) => {
                if(!ele.getText().includes(element)){
                  return false;
                }
            })
        });
        return true;
    }

    shiftRight() {
        browser.execute(() => {
            document.querySelector('.ag-body-horizontal-scroll-viewport').scrollLeft = document.querySelector('.ag-body-horizontal-scroll-viewport').scrollWidth
         });
        browser.pause(2000)
    }

    setfiltertoLessThan() {
        browser.execute(() => {
            document.querySelector('.ag-picker-field-display').innerHTML = "Less Than"
         })
    }
}

export default new Helper();