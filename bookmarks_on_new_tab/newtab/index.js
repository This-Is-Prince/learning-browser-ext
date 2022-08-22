const allBookmarks = [];

function findBookmarks() {
  chrome.bookmarks.getTree((results) => {
    traverse(results[0].children);
    const main = document.getElementById("main");
    allBookmarks.forEach(async (bookmark) => {
      createAnchorTag(main, bookmark);
    });
  });
}

findBookmarks();

function traverse(bookmarks) {
  if (bookmarks) {
    bookmarks.forEach((bookmark) => {
      if (bookmark.url) {
        allBookmarks.push(bookmark);
      } else if (bookmark.children && bookmark.children.length > 0) {
        traverse(bookmark.children);
      }
    });
  }
}

function createAnchorTag(main, bookmark) {
  const a = document.createElement("a");
  a.href = bookmark.url;
  const faviconSrc = `chrome-extension://${
    chrome.runtime.id
  }/_favicon/?pageUrl=${encodeURIComponent(bookmark.url)}&size=32`;
  const img = document.createElement("img");
  img.src = faviconSrc;
  a.appendChild(img);
  const span = document.createElement("span");
  span.textContent = bookmark.title;
  a.appendChild(span);
  main.appendChild(a);
}
