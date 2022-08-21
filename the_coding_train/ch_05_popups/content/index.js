console.log(chrome);

chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  console.log(request);
  if (request.action === "changeColor") {
    document.body.style.backgroundColor = "white";
  }
});
