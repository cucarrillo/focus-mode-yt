// about: main script file for focusModeYT
// author: Cesar Carrillo

// TODO: make print message more detailed
function onError() { console.log("error in the code"); }

// search youtube videos using duckduckgo
function altSearch()
{
    const text = document.getElementById("ytsearch").value;

    window.location = "https://duckduckgo.com/?q=" + text + " site%3Ayoutube.com&t=h_&iar=videos&iax=videos&ia=videos";
}

// entry point
function runScript(value)
{
    // make sure the script is enabled
    if(value.enableDisable) { return; }

    // title and search inputs
    const domSearch = `<center>
                            <h1 style="font-size: 30px;">YouTube Focus Mode</h1>
                            <input placeholder="search on youtube" type="text" id="ytsearch">
                            <input id="ytsearchbtn" type="button" value="Search">
                        </center><br><br>`;

    const domAbout = `  <center>
                            <br>
                            <form action="https://github.com/cucarrillo/focus-mode-yt">
                                <input type="submit" value="github repo">
                                <p style="font-size: 12px;">created by Cesar Carrillo</p> 
                            </form>
                        </center>`;

    // set the base style
    document.body.style.background  = "#171717";
    document.body.style.color       = "#FFFFFF";

    // remove everything that youtube provided
    document.head.innerHTML = "";
    document.body.innerHTML = domSearch;

    // check if the user is watching a video
    if(window.location.pathname.startsWith("/watch"))
    {
        // get the video ID and implement the embedded video
        const videoID = window.location.search.replace("?v=", "");
        const domVideo = ` <center>
                                <iframe style="width: 1280px; height: 720px;"
                                    src="https://www.youtube-nocookie.com/embed/${videoID}?rel=0" 
                                    allow="" allowfullscreen>
                                </iframe>
                            </center>`;

        document.body.innerHTML += domVideo;
    }

    // apply 'footer'
    document.body.innerHTML += domAbout;

    // apply search function to input box and button
    document.getElementById("ytsearch").addEventListener("keydown", function(event)
    { 
        if(event.key === "Enter") { altSearch(); }
    });

    document.getElementById("ytsearchbtn").addEventListener("click", function(event) { altSearch(); });
}

browser.storage.local.get("enableDisable").then(runScript, onError); // init