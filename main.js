// Load our next page
function loadPage()   {
    document.getElementsByClassName("ContentNavigation-link-3fplX")[1].click();
}
// Generate text links
function downloadLinks() {
    var textBlob = "";
    for (let i = 0; i < pages.length; i++) {
        textBlob += pages[i] +  "\n";
    }
    var vLink = document.createElement('a'),
        vBlob = new Blob([textBlob], {type: "octet/stream"}),
        vName = 'downloads.txt',
        vUrl = window.URL.createObjectURL(vBlob);
    vLink.setAttribute('href', vUrl);
    vLink.setAttribute('download', vName );
    vLink.click();
}

// Store our pages to download from
var pages = [];
var endPage  = Number(document.getElementsByClassName('content-ProgressBar-right')[0].textContent.split(" ")[2]);

console.log("Downloading links to videos. Total links: " + endPage);
// Set interval to load pages.
// This is prone to errors as the page may take longer to load.
// But I can't be bothered trying to fix it.
var ourInterval = setInterval(() => {
    pageCount = Number(document.getElementsByClassName('content-ProgressBar-right')[0].textContent.split(" ")[2]);
        console.log("Generating link " + pageCount + " of " + endPage);
    if (pageCount == endPage) {
        alert("All done, downloading links.");
        pages.push(document.URL);
        downloadLinks();
        clearInterval(ourInterval);
    } else {
        pages.push(document.URL);
        console.log(document.URL);
        loadPage();
    }
}, 5000);


