//New Code Start
window.onload = function () {
    if (
        window.TeneoWebChat &&
        typeof window.TeneoWebChat.initialize === 'function'
    ) {
        var element = document.getElementById('teneo-web-chat');
        const teneoProps = {
            teneoEngineUrl: 'https://suv7ht9gi0cmud0vr2tgg0udfk1fb8jb.grapetree-bot.teneo.solutions/grapetree-bot-jbgpt-en-dev-1/',
            launchIconUrl: '.../assets/images/chatbot-icon-sm.png',
            botAvatarUrl: '.../assets/images/chatbot-icon-sm.png',
            titleIconUrl: '.../assets/images/chatbot02.png',
            showCloseButton: true
        };
        window.TeneoWebChat.initialize(element, teneoProps);
        window.TeneoWebChat.call('show_callout', 'Welcome to GrapeTree Journal Bot');
        window.TeneoWebChat.call('set_chat_window_title', 'GrapeTree Journal Bot');
    }
};

var timeoutSeconds = 1980000;

var twcSessionTimeout = setTimeout(endSessionTWC, timeoutSeconds);

function onSendStopEndSessionTWC(payload) {
    clearTimeout(twcSessionTimeout);
    twcSessionTimeout = setTimeout(endSessionTWC, timeoutSeconds);
}

function endSessionTWC() {
    clearTimeout(twcSessionTimeout);
    TeneoWebChat.call('add_message', {
        type: 'text',
        author: 'bot',
        data: {
            text: 'Your session has timed out due to inactivity. Please refresh the page to start a new session.'
        }
    });
    TeneoWebChat.call('end_session');
    TeneoWebChat.call('disable_user_input')
}

