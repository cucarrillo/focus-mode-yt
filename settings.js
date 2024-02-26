// about: setting functions for "settings.html"
// author: Cesar Carrillo

// update the checkbox if the setting is activated
function updateDisabledCB(disabled)
{
    if(disabled.enableDisable)
    {
        document.getElementById("cbDisabled").click();
    }
    
    // create event listener for the checkbox
    // updates the new setting & refreshes the page
    cbDisabled.addEventListener("click", function(event)
    {
        browser.storage.local.set({"enableDisable": cbDisabled.checked});
        browser.tabs.executeScript({code: "location.reload();"});
    }, false);
}

// TODO: make print message more detailed
function onError() { console.log("error in the code"); }

// main function
function main()
{
    // update checkbox with the local storage
    browser.storage.local.get("enableDisable").then(updateDisabledCB, onError);
}

main(); // init