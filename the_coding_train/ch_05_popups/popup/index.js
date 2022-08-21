console.log("Popup: ", chrome);

function popup() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: "changeColor" });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("changeColor").addEventListener("click", popup);
});
