// about: setting functions for "settings.html"
// author: Cesar Carrillo

// update the checkbox if the setting is activated
function updateDisabledCB(disabled)
{
    if(disabled.enableDisable)
    {
        document.getElementById("cbDisabled").click();
    }
}

// TODO: make print message more detailed
function onError() { console.log("error in the code"); }

// main function
function main()
{
    // checkbox variables
    var cbDisabled = document.getElementById("cbDisabled");

    // match checkboxs with active settings
    browser.storage.local.get("enableDisable").then(updateDisabledCB, onError);

    // create event listeners for the checkboxes
    cbDisabled.addEventListener("change", function(event)
    {
        browser.storage.local.set({"enableDisable": cbDisabled.checked });
    }, false);
}

document.onload = main(); // init