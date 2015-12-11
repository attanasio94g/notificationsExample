function showNotification() {
    //Check browser
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isChrome = !!window.chrome && !isOpera;

    //Standard Web Notifications of W3C
    if (isOpera) {
        var notification = new Notification('This is a notification!', {
            body: 'This is the body!',
            tag: 'This is the tag!',
            icon: 'icon/48.png'
        });
    }
    //Chrome proprietary notifications
    else if (isChrome)
    {
        var id = '1'; //Id of the notification

        //Object with options of notification
        var opt = {
            type: "basic",
            title: "Primary Title",
            message: "Primary message to display",
            iconUrl: "icon/128.png"
        }

        chrome.notifications.create(id, opt);
    }
}

document.getElementById("button").addEventListener("click",showNotification);