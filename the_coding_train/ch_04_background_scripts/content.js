console.log("Chrome extension go");

document.addEventListener("mouseup", (event) => {
  if (window.getSelection().toString().length) {
    let exactText = window.getSelection().toString();
    const p = document.createElement("p");
    p.innerHTML = exactText;
    document.body.appendChild(p);
    p.style["width"] = "100vw";
    p.style["height"] = "100vh";
    p.style["position"] = "fixed";
    p.style["inset"] = "0";
    p.style["zIndex"] = "99999";
    p.style["backgroundColor"] = "red";
  }
});

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  if (message.text === "changeBackgroundColor") {
    let paragraphs = document.getElementsByTagName("p");
    for (elt of paragraphs) {
      elt.style["background-color"] = "#FF00FF";
    }
  }
}
