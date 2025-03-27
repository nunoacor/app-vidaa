function hax() {
    // custom icon
    var thumb = "https://atlas-content-cdn.pixelsquid.com/stock-images/file-folder-mdmADN9-600.jpg";
    // has to be a unique name
    var appName = "File Explorer";

    var thumbnail = thumb;
    var iconSmall = thumb;
    var iconBig = thumb;
    var AppUrl = "file://";
    var storetype = "store";
    var appId = appName;

    Hisense_installApp(appId, appName, thumbnail, iconSmall, iconBig, AppUrl, storetype, installCallBack);
}

function installCallBack(res) {
    if (res == 0) {
        // worked
    } else {
        // didn't work
    }
}
