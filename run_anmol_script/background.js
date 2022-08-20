function onRequest(request, sender, callback) {
  if (request.action == "createContextMenuItem") {
    const { SELECTION } = chrome.contextMenus.ContextType;
    const contextItemProperties = {
      id: sender.id,
      contexts: [SELECTION],
    };
    contextItemProperties.title = "Run Anmol Script";
    chrome.contextMenus.create(contextItemProperties);
    chrome.contextMenus.onClicked.addListener(function (info, tab) {
      const { selectionText } = info;
      chrome.tabs.sendMessage(tab.id, {
        action: "runAnmolScript",
        selectionText,
      });
    });
  }
}

chrome.runtime.onMessage.addListener(onRequest);
