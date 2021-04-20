
links = document.getElementsByClassName("content-ContentSummary-link")
var textBlob = "";
for (let i =0; i < links.length; i++) {
    textBlob += links[i] + "\n";
}

var vLink = document.createElement('a'),
    vBlob = new Blob([textBlob], {type: "octet/stream"}),
    vName = document.title.substring(0, 50).replace(/\s/g, "_") + ".txt";
    vUrl = window.URL.createObjectURL(vBlob);
vLink.setAttribute('href', vUrl);
vLink.setAttribute('download', vName );
vLink.click();
