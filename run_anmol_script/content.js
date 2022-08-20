function runAnmolScript(query) {
  if (query) {
    document.body.style["overflow"] = "hidden";

    const iFrame = createIFrame(query);
    const div = createDiv();
    const closeBtn = createCloseBtn(div);

    div.appendChild(closeBtn);
    div.appendChild(iFrame);
    document.body.appendChild(div);
  }
}

function createDiv() {
  const div = document.createElement("div");
  div.style["position"] = "fixed";
  div.style["inset"] = 0;
  div.style["zIndex"] = 9999;
  div.style["backgroundColor"] = "rgba(0,0,0,0.3)";
  div.style["display"] = "flex";
  div.style["justifyContent"] = "center";
  div.style["alignItems"] = "center";
  div.style["flexDirection"] = "column";
  div.style["gap"] = "2rem";
  div.style["width"] = "100vw";
  div.style["height"] = "100vh";
  div.style["padding"] = "5rem";
  return div;
}
function createCloseBtn(div) {
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.style["border"] = "none";
  closeBtn.style["borderRadius"] = "0.25rem";
  closeBtn.style["outline"] = "none";
  closeBtn.style["padding"] = "0.5rem 2rem";
  closeBtn.style["backgroundColor"] = "#dc3545";
  closeBtn.style["color"] = "white";
  closeBtn.style["fontSize"] = "1.5rem";
  closeBtn.style["fontWeight"] = "800";
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(div);
    window.getSelection()?.removeAllRanges();
  });
  return closeBtn;
}
function createIFrame(query) {
  const iFrame = document.createElement("iframe");
  iFrame.src = `https://www.vocabulary.com/dictionary/${query}`;
  iFrame.title = `${query} word page`;
  iFrame.style["width"] = "100%";
  iFrame.style["height"] = "100%";
  return iFrame;
}

chrome.runtime.sendMessage({
  action: "createContextMenuItem",
  runAnmolScript: runAnmolScript,
});

chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  if (request.action === "runAnmolScript") {
    runAnmolScript(request.selectionText);
  }
});
