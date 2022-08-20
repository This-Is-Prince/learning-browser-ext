console.log("Chrome extension go");

document.addEventListener("mouseup", async (event) => {
  console.log(event);
  if (window.getSelection().toString().length) {
    let exactText = window.getSelection().toString();
    try {
      const iFrame = document.createElement('iframe');
      iFrame.src=`https://www.vocabulary.com/dictionary/${exactText}`;
      iFrame.title=`${exactText} word page`
      iFrame.width=400
      iFrame.height=400
      document.body.appendChild(iFrame);
    } catch (error) {
      console.error(error)
    }
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
