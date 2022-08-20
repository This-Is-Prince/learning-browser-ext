console.log('Background running')

console.log(chrome);
chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg = {
        text: "changeBackgroundColor",
    }
    chrome.tabs.sendMessage(tab.id, msg);
}