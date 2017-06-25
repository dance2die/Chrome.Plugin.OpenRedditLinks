// https://developer.chrome.com/extensions/content_scripts

var anchors = document.querySelectorAll('a[data-event-action="title"]');

// Open current Reddit links in new tabs.
for (i = 0; i < anchors.length; i++) {
    // https://stackoverflow.com/a/24435877/4035
    // chrome.tabs.create({
    //     url: anchors[i].href
    // });

    // can't acess chrome.tabs.create within content script so use window.open instead.
    window.open(anchors[i].href);
};

// Go to next page.
var nextPageURL = document.querySelector('.next-button a').href;
if (nextPageURL) {
    window.location.href= nextPageURL;
} else {
    alert("There is NO next page!");
}




