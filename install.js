function hax() {
    // Custom icon
    var thumb = "https://atlas-content-cdn.pixelsquid.com/stock-images/file-folder-mdmADN9-600.jpg";
    var appName = "HiZ Store";

    var thumbnail = thumb;
    var iconSmall = thumb;
    var iconBig = thumb;
    var AppUrl = "https://phasedgapple.github.io/HiZ-Store";
    var storetype = "store";
    var appId = appName;

    Hisense_installApp(appId, appName, thumbnail, iconSmall, iconBig, AppUrl, storetype, installCallBack);
}

function eaglercraft() {
    // Custom icon
    var thumb = "https://atlas-content-cdn.pixelsquid.com/stock-images/file-folder-mdmADN9-600.jpg";
    var appName = "EaglerCtaftX 1.8.8";

    var thumbnail = thumb;
    var iconSmall = thumb;
    var iconBig = thumb;
    var AppUrl = "https://eaglercraft.com/mc/1.8.8/";
    var storetype = "store";
    var appId = appName;

    Hisense_installApp(appId, appName, thumbnail, iconSmall, iconBig, AppUrl, storetype, installCallBack);
}

function installCallBack(res) {
    if (res == 0) {
        showPopup("Success", "The app was installed successfully.");
    } else {
        showPopup("Error", "Installation failed. Error code: " + res);
    }
}

// Function to show a popup with a message
function showPopup(title, message) {
    // Create popup elements
    var popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "white";
    popup.style.padding = "20px";
    popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    popup.style.zIndex = "1000";
    popup.style.borderRadius = "5px";
    popup.style.textAlign = "center";

    var titleElem = document.createElement("h2");
    titleElem.innerText = title;
    popup.appendChild(titleElem);

    var messageElem = document.createElement("p");
    messageElem.innerText = message;
    popup.appendChild(messageElem);

    var closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.onclick = function () {
        document.body.removeChild(popup);
    };
    popup.appendChild(closeButton);

    // Append popup to the document body
    document.body.appendChild(popup);
}
