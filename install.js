function boredflix() {
    var thumb = "https://phasedgapple.github.io/HiZ-Store/img/boredflix.png";
    var appName = "BoredFlix";

    var thumbnail = thumb;
    var iconSmall = thumb;
    var iconBig = thumb;
    var AppUrl = "https://boredflix.com/";
    var storetype = "store";
    var appId = appName;

    Hisense_installApp(appId, appName, thumbnail, iconSmall, iconBig, AppUrl, storetype, installCallBack);
}

function stremio() {
    var thumb = "https://tecnobits.com/wp-content/uploads/2024/12/Stremio-logo.jpg";
    var appName = "Stremio";

    var thumbnail = thumb;
    var iconSmall = thumb;
    var iconBig = thumb;
    var AppUrl = "https://wn7lso8ghdka.stremio.com/hisense/index.html";
    var storetype = "store";
    var appId = appName;

    Hisense_installApp(appId, appName, thumbnail, iconSmall, iconBig, AppUrl, storetype, installCallBack);
}

function spotify() {
    var thumb = "https://facts.net/wp-content/uploads/2020/06/spotify-1360002_1920-730x438.jpg";
    var appName = "Spotify";

    var thumbnail = thumb;
    var iconSmall = thumb;
    var iconBig = thumb;
    var AppUrl = "https://open.spotify.com/";
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
