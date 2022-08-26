chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            // "Relax_time",
            {
                type: "basic",
                iconUrl: "icon_128.png",
                title: "Take a break",
                message: "Have a sip of water human!",
                silent: false
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "Relax_time",
        {
            delayInMinutes: 1,
            periodInMinutes: 1
        }
    );
}
